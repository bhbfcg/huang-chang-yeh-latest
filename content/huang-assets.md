# PDF 作品圖片映射

本表依 `pdfimages -list` 的頁碼與檔案序號整理。每個案例先選擇一至三張代表圖，完整圖庫可在後續案例頁再擴充。

| 網站案例 | PDF 頁面 | 原始檔案 | 用途 |
|---|---:|---|---|
| 畢業設計－茶藝館 | 2–3 | `image-001.jpg`, `image-003.jpg`, `image-005.jpg`, `image-007.jpg` | 首頁 Hero／Works 首卡／案例圖庫 |
| 旗袍店 | 4–5 | `image-009.jpg`, `image-011.jpg`, `image-013.jpg`, `image-015.jpg` | Works 第二卡／案例主圖／案例圖庫 |
| 光引教堂－土地公廟 | 8–13 | `image-026.jpg`, `image-027.jpg`, `image-028.jpg`, `image-029.jpg`, `image-032.jpg`, `image-033.jpg`, `image-034.jpg`, `image-035.jpg` | 建築概念主圖／形式類別案例 |
| 永吉路 3D 18 樓 | 14–17 | `image-037.jpg`, `image-038.jpg`, `image-039.jpg`, `image-040.jpg` | 住宅可視化案例 |
| 永吉路 3D 13 樓 | 18–24 | `image-041.jpg`, `image-042.jpg`, `image-043.jpg`, `image-044.jpg`, `image-045.jpg`, `image-046.jpg`, `image-047.jpg`, `image-048.jpg`, `image-049.jpg`, `image-050.jpg`, `image-051.jpg` | 多空間住宅案例 |
| Rhino 模型練習 | 25–27 | `image-053.png`, `image-054.png`, `image-055.png`, `image-056.png`, `image-058.png`, `image-059.png` | 形式研究／模型類別案例 |
| 實習公司／玉山社區 3D | 28–29 | `image-060.jpg`, `image-061.jpg` | 實務住宅可視化案例 |

## 首頁代表案例建議

首頁不宜同時放入 7 組同權重案例，否則會削弱首屏敘事。建議主畫面先呈現三個具有尺度差異的代表作：**茶藝館**（文化空間）、**光引教堂－土地公廟**（建築概念）、**永吉路 3D 13 樓**（住宅可視化）。Works 頁再完整列出七組作品，讓首頁負責建立方向，內頁負責展開作品集。

## 圖片處理原則

網站只上傳代表圖與經過尺寸壓縮的版本，保留原始 PDF 匯出檔在 `/home/ubuntu/webdev-static-assets/huang-portfolio/` 作為備份。PNG 模型圖應轉為適合網頁載入的 WebP 或 JPEG，避免將 9921×7016 的原始 PNG 直接作為首屏資產。
