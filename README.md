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
  * **選擇權量化決策**：[https://web-apps-hub.cv1706yang.workers.dev/options-quant-app/](https://web-apps-hub.cv1706yang.workers.dev/options-quant-app/)
  * **台灣房產估價 & MCP**：[https://web-apps-hub.cv1706yang.workers.dev/taiwan-real-estate/](https://web-apps-hub.cv1706yang.workers.dev/taiwan-real-estate/)

* **GitHub Pages 靜態站點**：
  * **入口總覽**：[https://cv1706.github.io/web-apps-hub/](https://cv1706.github.io/web-apps-hub/)
  * **三國戰棋**：[https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/](https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/)
  * **即時路況**：[https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/](https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/)
  * **通行費試算**：[https://cv1706.github.io/web-apps-hub/highway-toll-calculator/](https://cv1706.github.io/web-apps-hub/highway-toll-calculator/)
  * **吊車安全試算**：[https://cv1706.github.io/web-apps-hub/crane-calculator/](https://cv1706.github.io/web-apps-hub/crane-calculator/)
  * **選擇權量化決策**：[https://cv1706.github.io/web-apps-hub/options-quant-app/](https://cv1706.github.io/web-apps-hub/options-quant-app/)
  * **台灣房產估價 & MCP**：[https://cv1706.github.io/web-apps-hub/taiwan-real-estate/](https://cv1706.github.io/web-apps-hub/taiwan-real-estate/)

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

### 5. 📈 台指選擇權量化多空決策與損益平衡小工具
* **路徑**：`/options-quant-app/`
* **使用說明**：
  * **策略對齊**：支援牛市價差、熊市價差與鐵鷹策略量化產出。
  * **情境矩陣**：OptionStrat 風格損益平衡矩陣與 Greeks 敏感度分析。

### 6. 🏡 台灣房地產估價與開價合理性分析器 (ToEstate MCP Hub)
* **路徑**：`/taiwan-real-estate/`
* **使用說明**：
  * **開價合理性評估**：整合縣市區域基準與 Hedonic 折舊模型，拆分車位價格計算真實淨坪單價，呈現溢價/折價指針量表與建議出價空間。
  * **法拍屋折價與風險試算**：全台地院與行政執行署拍次折價率（Discount %）即時推算，解析點交條件、持分優先承買權與隱性成本。
  * **房貸與租金收益**：支援新青安/一般房貸本息均攤計算、寬限期利息及毛租金收益率（Gross Yield）。
  * **ToEstate MCP 提示詞精靈**：依物件參數自動產出最佳化繁體中文提示詞，並提供 ChatGPT、Claude、Cursor、VS Code、Claude Code 等多客戶端連線配置指令。

---

## 🚀 部署與維護方式

1. **Cloudflare Workers 邊緣反向代理**：
   * Worker 實例名稱：`web-apps-hub`
   * 線上端點：`https://web-apps-hub.cv1706yang.workers.dev/`
   * 自動鏡像轉發 GitHub Pages 來源，免手動重複發布。
2. **GitHub Pages 發布**：
   * 推送至 `main` 分支由 GitHub Pages / Actions 自動部署生效。
