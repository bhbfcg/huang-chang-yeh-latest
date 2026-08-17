# 茶藝館案例頁重新設計藍圖

## 現況基線

目前頁面已具備茶藝館標題、`A tea house shaped by pause and ritual.` 導言、The approach 段落、14 張既有圖片、圖片圖說、分類篩選、Lightbox、捲動淡入、輕微視差、案例前後導覽與回到頂部按鈕。現有結構為全站共用的 `ProjectDetail`：上方為左側返回與類型、右側標題／導言／metadata，接一張主視覺，再接 Observe / Translate / Make clear 與 Lightbox 圖組。

## 目前問題

現有畫面將 Hero、Project Information、設計論述與圖片圖組放在相近的編輯欄寬中，造成標題、說明與作品圖像的視覺權重接近。圖片雖然已經有跨欄，但大多仍沿用規則化的 12 欄排列，讀者不容易感受到「進入／停留／材料／光影／庭院」的空間敘事。分類控制與圖說也較像功能列，尚未成為一個高端案例頁的閱讀節點。

## 已存在內容與素材範圍

茶藝館目前使用主視覺 `picture1-teahouse-01.webp`，以及 `picture1-teahouse-02.webp` 至 `picture1-teahouse-14.webp`。既有圖說依序為：木格柵與入口光線、茶席的低尺度停留、紙拉門與內外界面、庭院砂紋與借景、暖木包覆的空間尺度、格柵之間的視線節奏、茶席與自然光、室內與庭院的收束、燈籠群聚成為空間焦點、長窗與木作座席、書牆／收納與自然光、茶席與山水屏風、深色長廊的慢行尺度、枯山水與室內借景。重新設計只重新編排這些現有資料，不加入平面圖、剖面圖、材料表、年份、地點或其他未提供的專案資訊。

## 新的閱讀節奏

1. **Hero / TEAHOUSE**：極簡標題與副標在圖片外側，主視覺佔據主要視窗，不在 Hero 內放長段落。
2. **Project Information**：Hero 後以細線與小型資料列呈現現有的編號、類型與 metadata；未提供的 Year、Location、Designer 欄位不虛構。
3. **Concept / The approach**：保留現有 `Observe. Translate. Make clear.` 與既有中文 body，改成左側 section marker、右側短段落的 editorial 閱讀單元。
4. **Atmosphere**：使用既有主視覺與庭院／茶席相關圖片建立一張大圖與留白，讓光影成為下一個敘事轉折。
5. **Material / Threshold**：以長廊、格柵、長窗、書牆與燈籠相關圖片組成不等寬左右交錯的序列，不做平均卡片網格。
6. **Space / Ritual**：以茶席、屏風與內外界面圖片組成兩張並排加一張置中的節奏，保留圖說與 Lightbox。
7. **Final images**：以枯山水／庭院與一張超大圖收束，再接既有上一個／下一個案例導覽。

## 實作策略

將 `ProjectDetail` 保持為其他案例可用的共用資料與路由元件；只對 `teahouse-graduation-project` 分支渲染新的 `TeahouseCaseStudy` 專屬內容。Lightbox 的資料來源仍使用同一組 14 張圖片與 captions，分類篩選仍保留但移至較次要的序列導覽位置。新增 CSS 僅使用茶藝館專屬 class prefix，避免污染其他案例。動畫只保留首屏 image reveal、section reveal 與低幅度 parallax，並延續 reduced-motion 降級。

## 第一輪實作驗證

重新設計後的實際預覽已確認包含 `TEAHOUSE` Hero、`Graduation Project / Interior Architecture` 副標、`Project information` 資料列、`01 / Concept`、`02—05 / Visual essay`、14 張既有圖片及底部前後案例導覽。桌面截圖呈現大標題、寬幅主視覺、暖沙色 Concept 區與非規則圖片節奏；其他 `/works/yongji-18f-visualization` 與 `/works` 截圖維持原有版面。TypeScript 與 production build 已通過。預覽長頁在 full-page capture 中對 lazy image 的實際載入仍需以一般滾動流程再確認，避免把截圖工具的 lazy-loading 行為誤判為版面問題。

## Netlify readiness check

Netlify project overview 明確顯示：`cdc is now running on operational credits`，published sites 仍然 live，但 production deploys 與 Agent Runners 已 paused；頁面目前的正式版本仍為 `main@6a128cb Published`，且專案標示 `Deploys from GitHub`。因此本輪變更已整理在本地 checkpoint 與待同步檔案中，但在 operational credits 恢復前不應宣稱已完成正式 Netlify deploy。
