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
  * **江山時序歷史地圖（互動主圖）**：[https://web-apps-hub.cv1706yang.workers.dev/jiangshan-map/](https://web-apps-hub.cv1706yang.workers.dev/jiangshan-map/)
  * **江山時序專題考據總覽（靜態圖志）**：[https://web-apps-hub.cv1706yang.workers.dev/jiangshan-map/topics/index.html](https://web-apps-hub.cv1706yang.workers.dev/jiangshan-map/topics/index.html)
  * **無錫上海親子自由行手帳**：[https://web-apps-hub.cv1706yang.workers.dev/wuxi-shanghai-guide/](https://web-apps-hub.cv1706yang.workers.dev/wuxi-shanghai-guide/)
  * **Open Live Map 即時地圖**：[https://gslai.win/](https://gslai.win/)

* **GitHub Pages 靜態站點**：
  * **入口總覽**：[https://cv1706.github.io/web-apps-hub/](https://cv1706.github.io/web-apps-hub/)
  * **三國戰棋**：[https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/](https://cv1706.github.io/web-apps-hub/games/three-kingdoms-chess/)
  * **即時路況**：[https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/](https://cv1706.github.io/web-apps-hub/taiwan-traffic-live/)
  * **通行費試算**：[https://cv1706.github.io/web-apps-hub/highway-toll-calculator/](https://cv1706.github.io/web-apps-hub/highway-toll-calculator/)
  * **吊車安全試算**：[https://cv1706.github.io/web-apps-hub/crane-calculator/](https://cv1706.github.io/web-apps-hub/crane-calculator/)
  * **選擇權量化決策**：[https://cv1706.github.io/web-apps-hub/options-quant-app/](https://cv1706.github.io/web-apps-hub/options-quant-app/)
  * **台灣房產估價 & MCP**：[https://cv1706.github.io/web-apps-hub/taiwan-real-estate/](https://cv1706.github.io/web-apps-hub/taiwan-real-estate/)
  * **江山時序歷史地圖（互動主圖）**：[https://cv1706.github.io/web-apps-hub/jiangshan-map/](https://cv1706.github.io/web-apps-hub/jiangshan-map/)
  * **江山時序專題考據總覽（靜態圖志）**：[https://cv1706.github.io/web-apps-hub/jiangshan-map/topics/index.html](https://cv1706.github.io/web-apps-hub/jiangshan-map/topics/index.html)
  * **無錫上海親子自由行手帳**：[https://cv1706.github.io/web-apps-hub/wuxi-shanghai-guide/](https://cv1706.github.io/web-apps-hub/wuxi-shanghai-guide/)
  * **Open Live Map 即時地圖**：[https://gslai.win/](https://gslai.win/)

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

### 3. 🚗 自行開車交通費申報與國道里程計算系統
* **路徑**：`/highway-toll-calculator/`
* **系統定位**：專為企業員工出差自行開車交通費、國道計程通行費與停車費報銷設計之現代化月報系統，100% 擬合企業官方「自行開車交通費一覽表（Transportation fee summary by driving）」財務審核標準格式。
* **五大核心功能與操作流程（SOP）**：
  1. **表頭參數設定**：支援自訂姓名、員工編號、部門代碼（COTS）、申報月份、日期顯示格式（YYYY/MM/DD 或民國/中文格式）、通行費率（預設 eTag 9 折 1.08 元/km，可切換標準法定 1.2 元/km）與里程補助單價（預設 8 元/km）。
  2. **國道官方里程免金鑰速查**：內建國道 1 號（83 站）、國道 3 號（87 站）、國道 5 號（9 站）之完整官方交流道與里程節點。只需下拉選取起訖交流道，系統自動帶入樁號並求得精準計費里程差值。
  3. **去回程與多途經點快捷錄入**：
     * **+ 新增途經路段**：支援單日多次拜訪行程，動態疊加多個高速公路路段。
     * **+ 產生反向返程路段**：一鍵將已填寫的去程路段反轉為返程路段。
     * **一鍵轉為標準來回**：只需設定單程起訖交流道，點擊後瞬間自動生成「A 去 B + B 回 A」之成套路段。
     * **跨列合併（Rowspan）**：同一天出差行程在報表中自動將 Date (A)、Purpose (B)、Total Mileage (C) 進行儲存格合併，版面整齊專業。
  4. **全項差旅費用自動加總**：
     * **交通費計算公式**：`總核銷里程數 (C 欄累計) × 8 元 + 停車費加總`。
     * **水平彙整表（Summary of Claims）**：交通費、聚餐費（支援直接點擊修改）、其他費用、電話費（預設 1200 元）水平排列，即時計算全月請領總額（Total）。
     * **頂部 KPI 數據牆**：即時統計申報總天數、總核銷里程、交通費、通行費、停車費與請領總金額。
  5. **多元報表匯出與 A4 橫向 PDF 列印**：
     * **一鍵複製為 Excel 表格**：點擊即複製為標準 TSV 剪貼簿格式，直接於 Excel 按下 Ctrl+V 即可貼入完整格式化報表。
     * **匯出 CSV 檔案**：提供純文字逗號分隔檔案供離線封存與二次數據分析。
     * **列印 / 另存 PDF**：內建專屬 `@media print` 樣式，鎖定 A4 橫向版型（Landscape）、自動縮放 90%、精確鎖定 13 個欄位百分比寬度並自動隱藏所有操作按鈕與設定區塊，確保無論瀏覽器邊界設定為何皆能 100% 裝入單頁不溢出。

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

### 6. 🏡 台灣房地產估價與開價合理性分析器 (ToEstate MCP Live)
* **路徑**：`/taiwan-real-estate/`
* **使用說明**：
  * **ToEstate 雲端 MCP 即時連線（Live Search）**：透過 Cloudflare 邊緣反向代理（`/api/toestate-mcp`），前端網頁可直接即時檢索 ToEstate 55 項 MCP 資料庫。輸入社區或建案名稱（如「心之所向」），一鍵獲取近一年實價登錄真實成交單價並自動填入試算。
  * **司法院待拍法拍屋即時抓取（Live Foreclosures）**：連線調用 `get_foreclosures` 工具，即時載入六都三週內開拍住宅點交標的、底價、坪數與案號，點選即可將底價與條件帶入折價與獲利分析。
  * **開價合理性與真實淨坪單價**：支援坡平、坡機、機械車位型態拆分，分離車位總價與坪數，計算真實淨坪單價；結合 Hedonic 模型與樓層/屋齡折舊係數，動態指針呈現折溢價百分比與建議議價空間。
  * **法拍屋折價與風險排查**：自動計算各拍次底價相對於市場估值之折價率（Discount %），並對不點交、第三人占用與共有物優先承買權進行風險警示與隱性成本淨利潤試算。
  * **房貸與租金收益**：支援 20 / 30 / 40 年（新青安）本息均攤計算、寬限期利息支出與毛租金年收益率（Gross Yield）。
  * **ToEstate MCP 提示詞與配置精靈**：自動將物件參數轉換為結構化繁體中文 Prompt，並內建 ChatGPT、Claude、Cursor、VS Code、Claude Code 與 Gemini CLI 的直接配置代碼。

### 7. 🗺️ Open Live Map · 公開即時地圖 (全台路況監視器 / 環保車 / 氣象 / 實價登錄)
* **外連網址**：[https://gslai.win/](https://gslai.win/)
* **使用說明**：
  * **全台即時路況與監視器（CCTV）**：整合國道、公路局省道、市區攝影機、全球/景點即時串流影像（含 YouTube 串流與即時快照），支援多分割畫面監控。
  * **行車前方跟車導覽（Follow Mode）**：依目前 GPS 行進方向（北上/南下/東向/西向）與國道/省道路線，自動依序輪播前方指定公里數內的即時監視器。
  * **中央氣象署即時測站**：在地圖上疊加全台氣象測站即時溫度、雨量、風速與濕度資料。
  * **桃園環保車動態 GPS**：即時掌握垃圾車與資源回收車的行駛位置與即時路班資訊。
  * **內政部實價登錄圖層**：依縮放視野自動進行縣市/行政區聚合，並於放大後精準顯示各門牌買賣、預售屋與租賃成交紀錄。
### 8. 📜 江山時序 · 中國歷史地圖時間軸 (繁體中文版)
* **路徑**：
  * **互動主地圖**：`/jiangshan-map/`
  * **靜態專題考據總覽**：`/jiangshan-map/topics/index.html`
* **使用說明**：
  * **歷代疆域時間軸**：橫跨戰國周威烈王二十三年（前 403 年）至現代，涵蓋 18 朝代、167 階段疆域演變，拖動時間軸可直觀比對上一階段朱紅虛線「鬼影邊界（Ghost Boundary Diff）」。
  * **點地溯源古今地名**：點擊畫布上任意古邑名城、名關要塞或雙擊地圖，即刻展開該地 2,400 年建制變遷履歷與現場歷史事件。
  * **歷史先賢時空行跡**：收錄秦始皇滅六國、張騫鑿空西域、諸葛亮出山北伐、玄奘西行、李白壯遊、蘇軾貶謫與王陽明悟道生平路線。
  * **智慧雙向搜尋**：全域搜尋方塊原生支援繁體中文（如「諸葛亮」、「長安」、「函谷關」），並自動相容簡體輸入比對。
  * **專題考據圖志（35 篇靜態專題）**：涵蓋 18 大歷史時期政區沿革表、杜甫《聞官軍收河南河北》、蘇軾貶謫嶺南、文天祥《過零丁洋》、長平之戰、赤壁之戰、淝水之戰等經典名篇與大戰考據圖志，字型完全在地化為台灣繁體標準並消除外部連結外洩。

---

## 🚀 部署與維護方式

1. **Cloudflare Workers 邊緣反向代理**：
   * Worker 實例名稱：`web-apps-hub`
   * 線上端點：`https://web-apps-hub.cv1706yang.workers.dev/`
   * 自動鏡像轉發 GitHub Pages 來源，免手動重複發布。
2. **GitHub Pages 發布**：
   * 推送至 `main` 分支由 GitHub Pages / Actions 自動部署生效。
