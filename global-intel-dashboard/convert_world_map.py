import json
from pathlib import Path

this_dir = Path(__file__).resolve().parent
map_json = this_dir / "world_map_path.json"
out_js = this_dir / "world_vector.js"

if map_json.exists():
    with open(map_json, "r", encoding="utf-8") as f:
        data = json.load(f)
        path_str = data.get("d", "")
    
    with open(out_js, "w", encoding="utf-8") as f:
        f.write("/* 高精度世界地圖向量路徑 (Natural Earth / D3) */\n")
        f.write('window.WORLD_MAP_VECTOR = ' + json.dumps(path_str, ensure_ascii=False) + ';\n')
    print("world_vector.js generated successfully! Path length:", len(path_str))
else:
    print("world_map_path.json not found!")

