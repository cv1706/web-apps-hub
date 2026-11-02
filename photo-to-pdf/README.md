# 光印轉換所 Photo & PDF · 極速相片與 PDF 雙向轉換隱私工坊

本目錄為「光印轉換所 Photo & PDF」獨立純前端 Web 應用之實體部署目錄。支援「相片轉 PDF」與「PDF 轉高解析圖片」雙向互轉。

## 快速開啟方式

直接使用現代瀏覽器開啟本目錄下的 `index.html`：
- 本機路徑：`Tools/web_apps/03-日常工具/photo-to-pdf/index.html`
- Web Apps Hub 部署路徑：`output/web-apps-hub/photo-to-pdf/index.html`
- 線上邊緣站點：[https://web-apps-hub.cv1706yang.workers.dev/photo-to-pdf/](https://web-apps-hub.cv1706yang.workers.dev/photo-to-pdf/)

## 完整說明書連結

詳細操作指引、規格參數、雙軌預覽機制與 FAQ 請參閱官方手冊：
- [【使用說明】-Photo-to-PDF極速相片轉PDF工作台.md](../../../manuals/【使用說明】-Photo-to-PDF極速相片轉PDF工作台.md)

## 核心特性

1. **100% 離線純前端運算**：全程本機記憶體組裝與解碼，個資證件、單據發票絕不上傳雲端伺服器。
2. **相片轉 PDF 全能排版**：支援 iPhone HEIC 原生解碼、EXIF 自動轉正、拖曳排序、紙張自適應或標準規格（A4/A3/Letter）、單頁 1/2/4 張網格拼貼與防偽斜向浮水印。
3. **PDF 逐頁轉高解析圖片**：內建 Mozilla pdf.js 引擎，支援 PNG（無損）、JPEG（輕巧）與 WebP（高效）格式，自訂 72/108/144/216 DPI 解析度。
4. **批次選取與 ZIP 打包下載**：支援全部頁面、奇數頁、偶數頁或自訂頁碼範圍（如 1-3, 5），一鍵封裝為 ZIP 壓縮檔或逐頁直接下載。
5. **雙向跨格式智慧拖曳**：在相片模式拖入 PDF 自動切換至 PDF 拆解；在 PDF 模式拖入相片自動切換至相片排版。
