---
title: 三國戰棋與 Web 應用工具集部署與遊玩操作說明
date: 2026-10-02
tags:
  - 遊戲專案
  - 三國戰棋
  - GitHubPages
  - CloudflareWorkers
  - 操作手冊
  - WebAppsHub
---

## 專案概要

「三國戰棋 · 歷史全紀元」（當前版本：`v1.3.0 貫日增益版`）為純前端技術開發之 6 人軍團回合制戰棋遊戲。專案與全套靜態工具整合於「Web Apps Hub」中，完整收錄三國時期 50 場歷史戰役沙盤與 100 位專屬持武立繪武將名冊，具備將魂突破升星、直線雙目標貫日穿透、團隊增益防護光環、弓兵盲區與全軍神兵鑄造等完整策略系統。

---

## 存取網址與專案連結

### 1. 線上運行存取點
* **Cloudflare Workers 鏡像（全球 CDN 邊緣節點）**：
  * **入口總覽**：https://three-kingdoms-chess.cv1706yang.workers.dev/
  * **三國戰棋直達**：https://three-kingdoms-chess.cv1706yang.workers.dev/games/three-kingdoms-chess/
  * **即時路況看板**：https://three-kingdoms-chess.cv1706yang.workers.dev/taiwan-traffic-live/
* **GitHub Pages 線上直接存取點**：
  * **Web Apps 總覽導覽首頁（Portal）**：https://cv1706.github.io/web-apps-hub/
  * **三國戰棋線上直接遊玩網址**：https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/
  * **即時路況看板網址**：https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/

### 2. 原始碼與備用連結
* **GitHub 公開儲存庫**：https://github.com/cv1706/web-apps-hub
* **HTMLPreview 備用預覽連結**：https://htmlpreview.github.io/?https://github.com/cv1706/web-apps-hub/blob/main/index.html

---

## 雙管道部署與更新指引

### 管道一：Cloudflare Workers 即時發布（推薦）
專案根目錄配置有 `wrangler.toml`，資產目錄指向 `output/web-apps-hub`：

1. **初次授權**（僅需執行一次）：
   ```powershell
   cd c:\Users\yangk\.gemini\antigravity\scratch\Obsidian-Vault
   npx wrangler login
   ```
   * 瀏覽器將彈出授權視窗，點擊「Allow」確認。
2. **一鍵發布/更新**：
   ```powershell
   npx wrangler deploy
   ```
   * 執行後秒級同步至全球節點。

---

### 管道二：GitHub Pages 託管設定
1. 開啟公開儲存庫 Pages 設定頁面：
   `https://github.com/cv1706/web-apps-hub/settings/pages`
2. **Build and deployment** 設定：
   * **Source**：選取 `Deploy from a branch`。
   * **Branch**：選取 `main` 分支與 `/(root)` 目錄並儲存。
3. 程式碼推送至 GitHub `main` 分支時，將由系統自動編譯更新。

---

## 遊戲核心系統與戰鬥規則

### 一、 50 場歷史戰役章節
* **歷史進程**：自西元 184 年黃巾之亂（第 1 關）起兵，歷經虎牢關、官渡、赤壁、漢中、夷陵、七擒孟獲、六出祁山至西元 280 年三家歸晉（第 50 關）。
* **軍團編制**：我方出征 6 人軍團（主帥項雲 + 5 名自由出征武將），敵軍依歷史戰況配置 4 至 6 人成建制軍團（包含主帥 BOSS 與前排鐵盾、大戟槍兵、側翼神射手）。
* **勝負判定**：
  * **大捷**：擊潰敵軍主帥 BOSS 即宣告勝利，獲得豐厚軍資銅錢並解鎖下一戰役。
  * **潰敗**：主角「項雲」陣亡則戰線崩潰，需重新整備該關卡。

### 二、 兵種特性與射程盲區
1. **兵種定位**：
   * **槍兵（Spearman）**：近身 1 格突刺與破甲打擊。
   * **刀兵（Swordsman）**：近身 1 格高額物理重創。
   * **盾兵（Shieldman）**：近身 1 格防禦壁壘，高額生命與減傷。
   * **弓兵（Archer）**：遠程 2 至 3 格狙擊。
2. **弓兵射程盲區與走位 AI**：
   * **近身盲區**：敵軍逼近身前 1 格時無法射擊，必須走位拉開距離。
   * **敵軍 AI 脫離機制**：敵方弓兵遭近身時，行為樹自動判定最優撤退路徑，優先後撤 1 格拉開距離後再行輸出。

### 三、 四大戰技體系
點擊右側面板「⚡ 戰技：[名稱] [釋放]」發動武將專屬戰技：

* **💥 單體/常規猛擊（Damage）**：對目標造成 180% 攻擊力傷害並無視 40% 防禦。
* **🏹 直線穿透打擊（Pierce · 太史慈【貫日連珠】）**：朝十字直線發射，直接穿透前 2 名敵軍（第 1 目標 160% 傷害、第 2 目標 140% 傷害）。
* **✨ 團隊增益號令（Buff · 諸葛亮、劉備、曹操等）**：激勵周圍 2 格友軍，攻擊力提升 30%，持續 2 回合。
* **🛡 列陣防護鐵壁（Def · 張飛、司馬懿、典韋等）**：庇護周圍 2 格友軍，防禦力提升 50%，部隊外框附加藍色護盾光環，持續 2 回合。

### 四、 武將招攬、升星與全軍神兵
* **英雄酒館**：隨機刷新 4 位名將名冊。招攬機率為紅將（1%）、紫將（19%）、藍將（35%）、綠將（45%）。
* **將魂突破升星**：重複招攬已在冊武將自動轉為 3 枚碎片，每集滿 5 枚碎片自動升星（★+1），攻擊 +12、防禦 +10、生命 +40。
* **洛陽鐵匠鋪**：打造神兵（如倚天劍、青龍偃月刀、方天畫戟），全軍享有物攻共享數值加成。

---

## 常見問題與除錯（FAQ）

1. **GitHub Pages 首次開啟出現 404**：
   * 原因：GitHub 伺服器初次建置約需 1 至 2 分鐘。
   * 解法：前往 `https://github.com/cv1706/web-apps-hub/settings/pages` 確認 Branch 為 `main`，稍後重新整理即可。
2. **Cloudflare Workers 部署權限錯誤**：
   * 原因：尚未登入 Cloudflare 帳號。
   * 解法：在終端機執行 `npx wrangler login` 完成授權後，再次執行 `npx wrangler deploy`。
3. **畫面縮放與視窗適配**：
   * 遊戲採用自適應舞台縮放機制（基準解析度 1100x720）。若畫面邊緣被裁切，請將瀏覽器縮放比例調整為 100% 或全螢幕檢視。
