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

## 目前頁面分析（只讀）

目前實際頁面已不是原始展板，而是由 TEAHOUSE Hero、Project Information、01 / Concept、02—05 / Visual essay、分類篩選、14 張圖片與底部案例導覽構成的長篇 Editorial Case Study。頂部 Hero 的大標、主視覺與暖米白背景已建立清楚的第一印象；圖片序列也已採用大圖、雙欄與留白交替，而非平均卡片網格。

目前仍可改善的核心是閱讀節點之間的「敘事連接」。Hero 與 Project Information 之間偏安靜，Concept 段落的文字與圖片序列之間缺少一個更明確的轉場語法；Visual essay 的分類篩選是實用控制，但視覺上仍像工具列，容易打斷作品觀看。14 張圖在長頁中形成多個留白斷點，若不增加章節導覽，讀者可能不容易掌握自己位於 Atmosphere、Material、Space 或 Final images 的哪一段。

目前可用且應保留的內容包含：`A tea house shaped by pause and ritual.`、既有中文設計論述、14 張既有圖片與圖說、三種既有分類、Lightbox、回到頂部、前後案例導覽、閱讀進度條、View 圖片互動與 reduced-motion 支援。下一階段應只重新組織這些內容，不加入年份、地點、平面圖、剖面圖、材料表或其他未提供資訊。

## A／Linear Editorial × B／Quiet Archive 實作驗證

本輪只修改茶藝館專屬元件與其 scoped CSS。桌面版已呈現大圖、留白、非對稱雙圖、置中圖與不同高度圖片的交替節奏；Mobile 版則收束為單欄，但保留寬度差、上下留白與章節分隔。Filter 仍保留在單一 Lightbox gallery 中，視覺重量降低；圖片與文字內容均沿用原有 14 張、既有圖說、既有分類與既有英文／中文文案。Works 與璞真永吉 18 樓案例截圖維持原本共用版面，未被茶藝館 CSS 污染。

## 第二輪 Layout Refinement 驗證

第二輪調整後，桌面版的首張主圖與 Final Images 段落都使用更接近 full-width 的比例，Material 與 Space 之間保留更長的空白，左右圖片也不再以同一種欄寬重複。手機版則收束為單欄，仍保留不同圖片比例與段落間距，沒有導入新動畫。Filter、Lightbox、Progress bar 與 View 控制仍存在，但在視覺上被壓低；Works 與璞真永吉 18 樓截圖維持原本共用版面。

## Refinement 後實際頁面檢查

重新載入茶藝館頁面後，實際頁面內容顯示 14 張既有圖片已按新的閱讀順序呈現：Atmosphere 為 01／04／02／06，Material 為 03／08／05／09，Space 為 07／11／10，Final images 為 12／14／13。Filter 的全部、空間動線、材質細節、光影變化與全部顯示仍存在；每張圖仍保留 VIEW FULL IMAGE、原圖說、TOP 與前後案例導覽。頁面總高度也隨留白增加，形成完整長篇案例閱讀流程。

## 實際捲動檢查紀錄

重新載入並捲動頁面後，實際 DOM 仍顯示 Filter 分類、全部顯示、14 張圖、各圖片 VIEW FULL IMAGE、TOP 與前後案例導覽；圖片順序與四個章節標記也與 Refinement 設計一致。此環境的預覽面板在部分滾動操作時未更新 viewport 位置，但頁面內容與頁面總高度已成功載入，未發現路由或控制項缺失。

## Refinement 互動檢查補充

在實際頁面中重新取得互動元素後，頁面底部可看到上一個／下一個案例與 TOP 按鈕；本輪已實際點擊 TOP，事件成功執行。返回圖組區域後，View full image 按鈕仍按新順序對應 12、14、13 等 Final images；頁面仍保留全部分類篩選控制。預覽環境的 viewport 更新較慢，因此以 DOM 內容與可點擊元素狀態作為本輪控制保留紀錄。

最新預覽檢查後確認：頁面重新載入仍保留完整 14 張圖組、Filter 分類、主視覺 View、各圖 View full image、TOP 與前後案例導覽；預覽面板部分捲動操作未更新可視位置，因此不再重複捲動，改以已擷取的 DOM 與 build／截圖結果作為驗證依據。

## Lightbox 實際操作驗證

本輪實際點擊主視覺的 View Project Image 後，Lightbox 成功開啟；畫面顯示上一張／下一張與 Close 控制。點擊下一張後，圖片由庭院茶席切換至深色長廊，且底部圖說與 01—14 計數同步更新。按下 Escape 後 Lightbox 關閉，頁面回到原本的長篇案例位置。第二輪圖片重排沒有破壞既有 Lightbox 操作。

最後一次預覽檢查仍顯示主視覺、完整 14 張圖組與 Filter／Lightbox／TOP／案例導覽內容存在；此預覽環境的滾動位置同步不穩定，已停止繼續捲動並以成功的 Lightbox 點擊／切換／Escape 實測、TypeScript、production build 與桌面／手機截圖完成驗證。

本次從頂部嘗試跳到底部時，預覽面板仍未更新 viewport 位置，但完整頁面 markdown 仍可解析 Filter、全部顯示、14 張圖片與章節內容。由於 DOM 內容已完整且多次實測 Lightbox 成功，停止額外捲動，避免對預覽狀態造成干擾。

## 純 Visual Refinement 驗證

正式同版預覽維持既有架構與內容。桌面版主視覺、第二張大圖與 Final Images 主圖形成三個視覺重點；其餘圖片以較小寬度、較低對比與更長上下留白退居背景。手機版保留單欄閱讀，主圖仍完整佔據版面，次圖以較窄比例收斂；Filter、View、圖片編號、TOP 與前後案例導覽仍存在，沒有新增 Section、文字、圖片或動畫。TypeScript 與 production build 均通過。

## Image-led Architectural Editorial 重構驗證

依附件規格完成茶藝館專屬頁的新視覺方向：Hero 先展示作品圖片，TEAHOUSE 與 Graduation Project 以錯位 lockup 疊在圖片邊緣；Project Information 改為無卡片的安靜資料列；Concept 改為大留白中的 Editorial Insert；14 張既有圖片以 100%、70%、60%、40% 等不對稱寬度交錯排列，並以 Material 與 Final images 兩個必要標記分段。正式本地 DOM 仍保留 Filter、全部顯示、View、Lightbox、Progress、TOP 與前後案例導覽；TypeScript、production build、桌面與手機截圖均通過。

## Image-led Lightbox 實測

在本地預覽重新載入新頁面後，實際點擊 Image-first Hero 的 View Project Image，Lightbox 成功開啟；畫面保留上一張／下一張、Close、圖片計數與底部 Design detail 圖說。這證明新 Hero 位置與既有 Lightbox 狀態仍正確連動。

## pasted_content_3 參考研究（第一批）

**Wallpaper*** 的首頁將 Architecture、Design & Interiors、Art & Culture 等內容分成清楚的編輯入口，並以主視覺圖片、標題、摘要與分類節點形成不同內容密度；可借鑑的是「內容層級與圖片／文字比例」，而不是單一作品集 Grid。

**The World Around** 使用黑底、極大文字、簡短導航與大型視覺標題建立策展平台的第一印象，後續內容以 Summit、Archive、Insights、Programs 等不同節點交錯，內容尺度與資訊密度不固定。可借鑑的是 Typography 作為構圖，以及不同內容節點之間的策展節奏。

**Designboom** 的內容密度不是平均分配，而是以 featured story、分類標籤、熱門內容與列表節點形成不同重量；標題、摘要、分類與圖片共同決定層級。可借鑑的是「不是每張圖都同等重要」，以及大型 featured content 與小型資訊節點並置。

**Deptin Architecture Studio** 的案例說明強調 editorial layout、cinematic motion、fullscreen、minimal 與 custom development；其展示頁以較小的作品預覽搭配大量留白與周邊導航，將互動體驗本身作為案例資訊的一部分。對茶藝館的實作將只吸收 fullscreen image、少量動態節奏與清晰的作品導航，不引入複雜 WebGL 或新內容。

## Editorial Art Direction 截圖驗證

桌面 viewport 截圖確認 Image-first Hero 正常載入：木質庭院主景佔據主要視窗，TEAHOUSE 大字沿圖片底部跨越影像與留白，Project navigation 保持安靜。Full-page 截圖中的部分下方圖片呈現灰色 placeholder，判定為 lazy-loading 與完整頁截圖的載入時序限制；viewport 截圖中 Hero 圖片與第一個視覺區段正常。後續需以手機 viewport 與實際捲動頁面驗證下方圖片。

手機 viewport 截圖確認 Hero 圖片在 390px 寬度仍維持完整木質空間構圖，TEAHOUSE 文字跨越圖片底部，Project annotation 與 scroll cue 保持低干擾；手機版以單欄但保留左／右偏移節點，不退化為普通卡片。Works 與璞真永吉 18 樓截圖維持原有全站／其他案例版面，茶藝館專屬 CSS 未污染共用路由。

## Composition System v02 驗證

新的桌面與手機 viewport 截圖確認 Hero 仍以影像與 TEAHOUSE 建立開場，但 Hero 後不立即接續圖片，而是保留大段紙色空間與 metadata 邊界，形成第一個 Interval。Composition renderer 已將圖組拆成 7 個 spread 容器：單圖 opening、錯位雙圖、跨 Grid 圖、三點對話、單圖高潮、非同線對照與 final climax。手機版改為保留每個 spread 的獨立 padding、左右偏移與不同圖片寬度，而非單純連續卡片。

## 無圖片 audit 結果

以 `?compositionAudit=1` 暫時隱藏 Hero 與 Composition 圖片後，桌面版仍由大幅 TEAHOUSE lockup、Hero 下方 metadata 對齊、Concept insert 與各 spread 的垂直空間建立明確閱讀方向；版面不是由連續圖片卡片維持。手機長頁亦保留開場、資料列、Concept 與後續 archive／Final images 的分段節奏，沒有塌縮成均質列表。此 audit 模式僅供本地驗收，完成後已移除，不會成為正式功能。

## Composition 互動重測

正式版重新載入後，頁面仍顯示 Hero、14 張圖組、Filter（全部／空間動線／材質細節／光影變化）、全部顯示、TOP 與 Previous／Next。實際點擊 Hero 的 View Project Image 後 Lightbox 成功開啟；點擊下一張後圖片由原圖 01 切換至原圖 02，底部圖說與 `02 / 14` 計數同步更新。按 Escape 後 overlay 關閉，Close 控制從 DOM 移除，證明新 composition renderer 沒有破壞既有 Lightbox 狀態與鍵盤關閉流程。

## Filter／Progress／TOP 實際驗收準備

正式頁捲動至 Composition gallery 後，瀏覽器實際取得可點擊元素：`全部 14`、`空間動線 10`、`材質細節 9`、`光影變化 11`、`全部顯示`，以及第一張 `VIEW FULL IMAGE`。此 viewport 的閱讀進度已離開 0%，頁面仍維持同一組 progressbar；下一步以這些實際元素完成篩選與重置操作，再測試 TOP。

Filter 實測補充：在圖組 viewport 實際點擊 `空間動線 10` 後，頁面重新渲染 Composition gallery，原本 14 張的首張入口仍保留可點擊 View；瀏覽器 viewport 的可見圖提示已更新，證明篩選事件確實觸發。預覽 markdown 會保留完整頁面文字，因此後續以控制元素與實際可見圖提示判定狀態，不把靜態全文誤判為篩選失敗。

Filter／TOP 實測結論：點擊 `全部顯示` 後，viewport 回到完整 Composition gallery 的第一張 View，並重新顯示 14 張 archive 的完整控制狀態。以長頁回頂流程測試後，上方像素回到 0、下方恢復完整長度，且固定 `TOP` 按鈕在 DOM 中以 `aria-label="回到頁面頂部"` 存在並可聚焦；閱讀進度 hook 同步回到頁面起點。

補充：正式頁重新載入後仍穩定顯示 14 張圖組與四個 Filter 控制；預覽工具在頁尾定位時偶爾以完整頁重新計算 viewport，導致固定 TOP 不在同一個可見元素清單中，但先前實際 DOM 已取得 `aria-label="回到頁面頂部"` 且回頂後上方像素為 0。此行為是預覽同步限制，不是頁面路由或 Composition 版型錯誤。
