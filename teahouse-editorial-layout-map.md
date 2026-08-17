# TEAHOUSE EDITORIAL LAYOUT MAP

本次只使用現有 14 張圖片、既有圖說、既有分類、既有英文 intro 與中文 design text。這份 map 先定義圖片的視覺角色，再進入 JSX／CSS 實作；不新增圖片、資料或虛構內容。

## 圖片角色與編號

| 序號 | 現有資產 | 視覺判讀 | Editorial 角色 | 建議處理 |
|---|---|---|---|---|
| 01 | `picture1-teahouse-01.webp` | 主作品入口／完整空間主景 | Hero / Opening anchor | Full bleed，標題貼近圖片邊緣，先讓空間建立尺度 |
| 02 | `picture1-teahouse-02.webp` | 茶席與低尺度停留 | Isolated detail | 大留白後的小型孤立圖，作為第一個觀看停頓 |
| 03 | `picture1-teahouse-03.webp` | 紙拉門與內外界面 | Spatial counterpoint | 與 02 形成小型視覺對話，不做等寬 Grid |
| 04 | `picture1-teahouse-04.webp` | 庭院砂紋與借景 | Full-width transition | 橫向裁切，讓自然光／庭院成為第一個 spread 轉折 |
| 05 | `picture1-teahouse-05.webp` | 暖木包覆與空間尺度 | Anchor image | 置中偏右的大幅圖，與 04 保持節奏差異 |
| 06 | `picture1-teahouse-06.webp` | 格柵與視線節奏 | Detail / material note | 小幅垂直節點，貼近留白，不加大型標題 |
| 07 | `picture1-teahouse-07.webp` | 茶席與自然光 | Image + typography | 圖片靠左，既有 `detail.body` 文字在下一個閱讀節點出現 |
| 08 | `picture1-teahouse-08.webp` | 室內與庭院收束 | Visual bridge | 邊緣溢出／偏移，連接室內與戶外觀看 |
| 09 | `picture1-teahouse-09.webp` | 燈籠群聚焦點 | Visual anchor | 主要視覺高潮之一，接近 Fullscreen，保留 caption |
| 10 | `picture1-teahouse-10.webp` | 長窗與木作座席 | Quiet detail | 小型右側圖，降低密度，讓 09 後有呼吸 |
| 11 | `picture1-teahouse-11.webp` | 書牆、收納與自然光 | Editorial spread | 大幅左側圖，與 10 形成不對稱關係 |
| 12 | `picture1-teahouse-12.webp` | 茶席與山水屏風 | Image dialogue | 與 11 形成材料／文化語彙呼應，不使用新文字 |
| 13 | `picture1-teahouse-13.webp` | 深色長廊慢行尺度 | Spatial climax lead-in | 先以窄幅縱向畫面改變閱讀速度 |
| 14 | `picture1-teahouse-14.webp` | 枯山水與室內借景 | Final visual climax | 最後一張接近 Fullscreen，停留後再進入既有案例導覽 |

## 既有內容的文字位置

`detail.intro` 只出現在 Hero 的小型 editorial annotation；`detail.body` 作為唯一主要 Editorial Insert，放在 07／08 之後的留白節點；`detail.galleryIntro` 只保留在圖組入口的微型說明，不再做成固定的 Gallery header。既有 captions 仍貼近各圖片，既有 Project Information 保留為小型 metadata row。

## 雜誌跨頁 Composition

**Opening：** 01 Full bleed + TEAHOUSE 沿圖片邊緣錯位；不先放完整 metadata。

**Spread A：** 02 小型孤立圖 + 03 偏移對話圖 + 大留白，讓第一段不是規則雙欄。

**Spread B：** 04 橫向過渡圖 + 05 偏右 Anchor，利用圖片比例變化而非 section template。

**Spread C：** 06 細節節點 + 07 圖片與既有中文 design text + 08 邊緣溢出，將文字視為構圖空間的一部分。

**Spread D：** 09 燈籠群聚作 Visual Climax 1；10 小型 quiet detail；11／12 形成材料與文化語彙的視覺對話。

**Ending：** 13 窄幅長廊作為放慢速度的前奏；14 枯山水／借景作 Visual Climax 2，接著才進入既有 Previous／Next 導覽。

## UI 與動態限制

Filter、View、Lightbox、Progress、TOP、Previous／Next 全部保留，但改為小型文字索引或低對比輔助層；不新增 WebGL、複雜 Cursor、3D 或大量文字動畫。圖片 reveal 與既有 reduced-motion 降級保留，不能成為構圖的替代品。
