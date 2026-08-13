# COCO Design 高保真複製規格

本專案是對使用者提供的 COCO Design 網站（https://p1xmlim4dggi.creght.site/）進行高保真還原，不採用獨立的創意方向選擇流程。原站的首屏、版面比例、視覺節奏、文字層級、Before / After 游標揭露、作品展示、服務、流程與聯絡頁面，均視為本專案的 ground-truth 規格。

## Reference Ground Truth

- **品牌氣質：** 安靜、編輯感、成熟、低飽和、住宅室內設計。
- **核心互動：** 首屏一張明亮空屋影像與一張完成後空間影像重疊，游標移動時以柔邊遮罩揭露 After；互動提示位於首屏右下角。
- **色彩：** 暖米白／象牙白背景、深黑文字、低對比細線、自然木色與柔和室內光線；不得使用紫色漸層或高飽和霓虹色。
- **版面：** 桌面版採寬留白、不對稱圖片排列與固定頂部導覽；大標使用超大黑色無襯線字，標籤與輔助文字使用細小字距拉寬的全大寫字。
- **首頁順序：** Hero → About studio → stats → Selected works → Services → Process → Point of view → Start a project → Footer。
- **導覽：** COCO DESIGN、ABOUT、WORKS、SERVICES、PROCESS、CONTACT，右側固定 GET IN TOUCH。
- **內容語調：** 英文主文案搭配中文輔助文案；語氣克制、具體、不使用模板化歡迎詞。
- **案例：** Light-drawn family lounge、City kitchen with quiet evening light、Textured bedroom retreat；採三欄且上下錯位的作品圖與標籤資訊。
- **可用性補強：** 仍需忠於原站視覺，但加入觸控滑桿、鍵盤可操作控制、`prefers-reduced-motion` 降級與有效案例路由，避免複製原站的 404 缺陷。

## Design Decisions

- 版面使用原站的暖白與米灰切換，依區段建立「空間留白—影像敘事—文字說明」節奏。
- 首屏不加額外的視覺裝飾，不使用玻璃擬態、霓虹光暈或大型圓角卡片。
- 所有互動只做必要的 opacity、transform、clip-path 或背景位移，避免拖慢閱讀。
- 文字、按鈕與圖片均保留清楚的焦點狀態和觸控目標；在手機上改為垂直敘事及可拖曳 Before / After 比較。

## Style Decisions

- 原本 COCO Design 的住宅工作室定位已優化為 **黃昌業｜Interior Design & Spatial Visualization**，讓作品集同時容納文化空間、建築概念、住宅 3D 與 Rhino 形式研究。
- 品牌主軸由「完成住宅」改為「Spaces, shaped by light」，將光線、材料、尺度與形式研究作為所有作品的共同設計語言。
- 首頁保留原站最具辨識度的游標揭露互動，但 Before / After 兩側改用黃昌業作品，形成從住宅可視化到茶藝館空間的尺度轉換。
- 文案以設計觀察與方法為中心，不虛構工作室規模、完成案量或客戶背書；個人資料與教育時間線只呈現使用者提供的內容。
