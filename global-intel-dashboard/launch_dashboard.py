#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
全球總經、科技動態與地緣情報戰情室啟動器 (launch_dashboard.py)
功能：
1. 靜態資源伺服器 (index.html, intel_snapshot.js, intel_snapshot.json)
2. 提供 REST API：
   - GET /api/health    -> 健康檢查
   - GET /api/refresh   -> 強制後端重新同步最新行情與情報快照
3. 自動開啟本機預設瀏覽器
"""

import io
import os
import sys
import json
import time
import socket
import threading
import webbrowser
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

THIS_DIR = Path(__file__).resolve().parent
if str(THIS_DIR) not in sys.path:
    sys.path.insert(0, str(THIS_DIR))

from sync_intel_data import sync_all_data  # noqa: E402

SNAPSHOT_JSON = THIS_DIR / "intel_snapshot.json"
SNAPSHOT_JS = THIS_DIR / "intel_snapshot.js"

_SYNC_LOCK = threading.Lock()

class IntelDashboardHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(THIS_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        url_path = self.path.split("?")[0]
        
        if url_path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.end_headers()
            resp = {
                "status": "HEALTHY",
                "service": "GlobalIntelDashboard",
                "port": self.server.server_port,
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
            }
            self.wfile.write(json.dumps(resp, ensure_ascii=False).encode("utf-8"))
            return

        elif url_path == "/api/refresh":
            with _SYNC_LOCK:
                try:
                    snap = sync_all_data(SNAPSHOT_JSON, SNAPSHOT_JS)
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "SUCCESS", "data": snap}, ensure_ascii=False).encode("utf-8"))
                except Exception as e:
                    self.send_response(500)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "ERROR", "message": str(e)}, ensure_ascii=False).encode("utf-8"))
            return

        # 預設首頁
        if self.path == "/" or self.path == "":
            self.path = "/index.html"
            
        super().do_GET()

def find_available_port(start_port=8765):
    p = start_port
    while p < start_port + 50:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(("127.0.0.1", p)) != 0:
                return p
        p += 1
    return start_port

def run_server(port=8765, open_browser=True):
    actual_port = find_available_port(port)
    server = ThreadingHTTPServer(("127.0.0.1", actual_port), IntelDashboardHandler)
    url = f"http://127.0.0.1:{actual_port}/index.html"
    
    print("=" * 72)
    print("全球總經、科技情報與地緣局勢戰情室伺服器啟動成功！")
    print(f"  戰情室網址 : {url}")
    print(f"  後端快照檔 : {SNAPSHOT_JSON}")
    print("=" * 72)
    
    if open_browser:
        threading.Timer(0.8, lambda: webbrowser.open(url)).start()
        
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n伺服器正常停止。")
    finally:
        server.server_close()

if __name__ == "__main__":
    # 若快照尚不存在，先產出一份
    if not SNAPSHOT_JSON.exists() or not SNAPSHOT_JS.exists():
        sync_all_data(SNAPSHOT_JSON, SNAPSHOT_JS)
    run_server(port=8765, open_browser=False)

