# Web Apps Hub · 雲端數位工具與互動應用總覽

「Web Apps Hub」為一站式純前端靜態 Web 工具箱與策略遊戲整合平台。本專案完全開源、無敏感數據依賴，採用暗黑玻璃擬態（Glassmorphism）與響應式架構，支援 Cloudflare Workers 與 GitHub Pages 雙管道邊緣發布。

---

## 🌐 線上運行鏡像一覽

* **Cloudflare Workers 邊緣節點（全球高速推薦）**：
  * **入口總覽**：[https://web-apps-hub.cv1706yang.workers.dev/](https://web-apps-hub.cv1706yang.workers.dev/)
  * **三國戰棋**：[https://web-apps-hub.cv1706yang.workers.dev/games/three-kingdoms-chess/](https://web-apps-hub.cv1706yang.workers.dev/games/three-kingdoms-chess/)
  * **即時路況**：[https://web-apps-hub.cv1706yang.workers.dev/taiwan-traffic-live/](https://web-apps-hub.cv1706yang.workers.dev/taiwan-traffic-live/)
  * **通行費試算**：[https://web-apps-hub.cv1706yang.workers.dev/highway-toll-calculator/](https://web-apps-hub.cv1706yang.workers.dev/highway-toll-calculator/)
  * **吊車安全試算**：[https://web-apps-hub.cv1706yang.workers.dev/crane-calculator/](https://web-apps-hub.cv1706yang.workers.dev/crane-calculator/)

* **GitHub Pages 靜態站點**：
  * **入口總覽**：[https://cv1706.github.io/web-apps-hub/](https://cv1706.github.io/web-apps-hub/)
  * **三國戰棋**：[https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/](https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/)
  * **即時路況**：[https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/](https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/)
  * **通行費試算**：[https://cv1706.github.io/web-apps-hub/highway-toll-calculator/](https://cv1706.github.io/web-apps-hub/highway-toll-calculator/)
  * **吊車安全試算**：[https://cv1706.github.io/web-apps-hub/crane-calculator/](https://cv1706.github.io/web-apps-hub/crane-calculator/)

---

## 🎯 核心收錄工具使用手冊

### 1. ⚔️ 三國戰棋 · 歷史全紀元 (v1.3.0 貫日增益版)
* **路徑**：`/games/three-kingdoms-chess/`
* **使用說明**：
  * **戰役推進**：共 50 關史詩戰役（黃巾之亂至三家歸晉），擊潰敵方主帥 BOSS 即可獲勝獲取軍資。
  * **英雄酒館**：提供 100 位歷史名將名冊，重複抽卡轉化為碎片，滿 5 碎片自動突破升星（★+1）。
  * **特色戰技**：支援太史慈「貫日連珠」直線雙目標穿透、諸葛亮/曹操團隊增益（攻 +30%）、張飛/司馬懿列陣防禦（防 +50%）與弓兵 1 格盲區風箏走位。
  * **洛陽鐵匠鋪**：打造倚天劍、青龍偃月刀等神兵，享有全軍攻擊力共享加成。

### 2. 🚦 台灣即時路況動態看板 (Taiwan Traffic Live)
* **路徑**：`/taiwan-traffic-live/`
* **使用說明**：
  * **即時車速流向**：監測國 1、國 3、國 5 等全線車速。
  * **路況壅塞分級**：綠色順暢（>80 km/h）、黃色車多（60~80 km/h）、橘色壅塞（40~60 km/h）、紫色超塞（<40 km/h）。
  * **自動更新**：介接交通部 TDX 開放數據，提供路段速查與即時路況預警。

### 3. 🚗 國道高速公路計程通行費試算器
* **路徑**：`/highway-toll-calculator/`
* **使用說明**：
  * **交流道精準計費**：支援全台國道起迄交流道選取與行駛里程計算。
  * **車種費率自選**：小型車、大客車/大貨車、聯結車差異牌價。
  * **優惠折抵試算**：自動扣抵每日 20 公里免費里程、長途 75 折與 eTag 9 折優惠。

### 4. 🏗️ 移動式起重機吊裝配重安全試算器
* **路徑**：`/crane-calculator/`
* **使用說明**：
  * **參數校核**：輸入主臂長度、作業半徑、吊物重與索具重，自動計算額定總負荷與安全額度比率。
  * **法規預警**：依起重升降機具安全標準驗算，超出極限作業半徑即時警示。

---

## 🚀 部署與維護方式

1. **Cloudflare Workers 邊緣反向代理**：
   * Worker 實例名稱：`web-apps-hub`
   * 線上端點：`https://web-apps-hub.cv1706yang.workers.dev/`
   * 自動鏡像轉發 GitHub Pages 來源，免手動重複發布。
2. **GitHub Pages 發布**：
   * 推送至 `main` 分支由 GitHub Pages / Actions 自動部署生效。
