// COCO editorial system: one strong image argument, followed by a measured explanation and a magazine-paced visual essay.
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import LightboxGallery from "@/components/Lightbox";
import { portfolioProjects } from "./Works";

type ProjectDetailData = {
  intro: string;
  body: string;
  gallery: string[];
  galleryTitle: string;
  galleryIntro: string;
  captions: string[];
};

const detailData: Record<string, ProjectDetailData> = {
  "teahouse-graduation-project": {
    intro: "A tea house shaped by pause and ritual.",
    body: "以茶席、行走與停留作為空間秩序，將東方茶文化中的慢、靜與層次轉譯成入口、長廊、座席與服務空間。木格柵、暖色燈光與低尺度家具共同建立較內向的氛圍，使飲茶成為一段從城市節奏中慢下來的過程。",
    galleryTitle: "A room for slowing down.",
    galleryIntro: "從入口的明亮到茶席的低伏尺度，圖組沿著木格柵、紙拉門與庭院借景展開，記錄一個文化空間如何把行走的速度慢慢放低。",
    captions: ["木格柵與入口光線", "茶席的低尺度停留", "紙拉門與內外界面", "庭院砂紋與借景", "暖木包覆的空間尺度", "格柵之間的視線節奏", "茶席與自然光", "室內與庭院的收束"],
    gallery: ["/assets/picture1-teahouse-02.webp", "/assets/picture1-teahouse-03.webp", "/assets/picture1-teahouse-04.webp", "/assets/picture1-teahouse-05.webp", "/assets/picture1-teahouse-06.webp", "/assets/picture1-teahouse-07.webp", "/assets/picture1-teahouse-08.webp"],
  },
  "qipao-retail-interior": {
    intro: "A retail interior where fabric becomes atmosphere.",
    body: "以旗袍的布料、身體曲線與展示秩序為出發點，安排深色木作、米白牆面與屏風式櫃體，讓商品在空間中保留距離與視線。設計不以陳列數量取勝，而以光線、框景與行走路徑形成帶有東方氣質的觀看節奏。",
    galleryTitle: "A slower way to look.",
    galleryIntro: "旗袍店的觀看不是一次完成的，而是沿著櫃體、屏風與留白逐格發生。影像以入口、展示與停留的順序，整理布料與木作共同形成的沉靜氣質。",
    captions: ["入口的第一個框景", "木作與布料的對照", "展示櫃的觀看距離", "座席與休息尺度", "屏風後的光線層次", "陳列與行走的節奏"],
    gallery: ["/assets/picture1-qipao-02.webp", "/assets/picture1-qipao-03.webp", "/assets/picture1-qipao-04.webp", "/assets/picture1-qipao-05.webp", "/assets/picture1-qipao-06.webp"],
  },
  "light-church-tudigong-temple": {
    intro: "A temple shaped by ritual, threshold, and form.",
    body: "以傳統土地公廟的屋頂、牌樓與祭祀軸線為起點，重新組織弧形量體與中央入口。方案保留熟悉的宗教記憶，再透過尺度、曲面與明暗關係，探索更開放的公共性場景。",
    galleryTitle: "A threshold between memory and form.",
    galleryIntro: "這組影像把觀看重心放在入口、屋頂與公共廣場之間，讓熟悉的祭祀記憶透過曲面量體與光線關係，轉化為新的空間序列。",
    captions: ["弧形屋頂與中央入口", "牌樓、廣場與公共尺度", "量體在光線中的轉折"],
    gallery: ["/assets/picture1-temple-02.webp", "/assets/picture1-temple-03.webp"],
  },
  "yongji-18f-visualization": {
    intro: "A calm residential scheme built around light and proportion.",
    body: "以住宅日常為核心，透過灰白基底、木質櫃體、石紋餐桌與窗簾層次，建立穩定而可落地的生活場景。客廳、餐廳與收納被視為連續的空間系統，3D 視覺化則用來檢查比例、視線與燈光在不同角度下的關係。",
    galleryTitle: "Domestic calm, carefully proportioned.",
    galleryIntro: "璞真永吉 18 樓以連續的客餐廳視線為主軸，透過灰白、木質與石紋的細微差異，將住宅生活整理成安靜而清楚的畫面。",
    captions: ["客廳的光線與視線", "餐桌、收納與生活尺度", "材質在夜間光線中的層次"],
    gallery: ["/assets/picture1-yongji18-02.webp", "/assets/picture1-yongji18-03.webp"],
  },
  "yongji-13f-visualization": {
    intro: "One home, read through a sequence of rooms.",
    body: "從客廳、餐廳到臥室、衛浴與更衣間，透過一組完整的視角檢視住宅的材質連續性與生活動線。白灰、米色與黑色細框構成安靜的基底，讓光線、收納與家具比例成為畫面中的主要設計語言。",
    galleryTitle: "A home read as a continuous line.",
    galleryIntro: "從公共區域走向私領域，圖組以房間之間的材質連續性為主題，讓光線、收納與家具比例成為一條可以被閱讀的生活動線。",
    captions: ["公共區域的開放視線", "餐廚與收納的連續界面", "臥室的安靜比例", "衛浴的材質轉場", "細節、鏡面與光線"],
    gallery: ["/assets/picture1-yongji13-02.webp", "/assets/picture1-yongji13-03.webp", "/assets/picture1-yongji13-04.webp", "/assets/picture1-material-bath.webp"],
  },
  "rhino-form-study": {
    intro: "From modeled form to an inhabitable interior.",
    body: "以 Rhino 建立量體、格線與室內空間配置，透過牆面分割、家具比例、光線與材質，觀察形式如何從模型進入實際生活場景。圖組同時保留曲面量體、骨架結構與室內渲染，呈現從建模推演到空間表達的連續過程。",
    galleryTitle: "When a model begins to feel inhabited.",
    galleryIntro: "這不是單一成果圖，而是一段從量體、骨架到室內視覺化的推演。不同視角並置後，形式如何承受尺度、光線與人的使用，變得可以被比較。",
    captions: ["曲面量體與場地關係", "骨架結構的節奏", "形式分割與內部尺度", "表皮、開口與光線", "材料讓模型接近生活", "室內視覺化的最後一步", "從形式到可居空間"],
    gallery: ["/assets/picture1-rhino-02.webp", "/assets/picture1-rhino-03.webp", "/assets/picture1-rhino-04.webp", "/assets/picture1-rhino-05.webp", "/assets/picture1-rhino-06.webp", "/assets/picture1-rhino-07.webp"],
  },
  "yushan-community-3d": {
    intro: "A residential space composed through light and proportion.",
    body: "以客廳與餐廳情境整理住宅配置，將光線、家具、材質與生活物件轉化為清楚的空間畫面。這組作品聚焦於住宅視覺化如何協助理解比例、動線與日常使用。",
    galleryTitle: "Everyday life, held in a clear frame.",
    galleryIntro: "玉山社區以客廳與餐廳為兩個觀看支點，將窗光、家具與生活物件收束在乾淨的比例中，讓日常成為設計的尺度。",
    captions: ["客廳的窗光與生活尺度", "餐廳、吊燈與水平線"],
    gallery: ["/assets/picture1-yushan-02.webp"],
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/works/:slug");
  const project = params ? portfolioProjects.find((item) => item.slug === params.slug) : undefined;
  const detail = params ? detailData[params.slug] : undefined;

  if (!project || !detail) {
    return <div className="not-found"><h1>404</h1><p>This project is not available yet.</p><Link className="button button-dark" href="/works"><ArrowLeft size={14} /> Back to works</Link></div>;
  }

  return (
    <div className="detail-page">
      <section className="detail-intro">
        <div>
          <Link className="text-link" href="/works"><ArrowLeft size={14} /> Back to works</Link>
          <div className="section-label" style={{ marginTop: "4rem" }}>{project.type}</div>
        </div>
        <div>
          <h1>{project.title}</h1>
          <p>{detail.intro}</p>
          <div className="project-meta" style={{ marginTop: "22px", justifyContent: "flex-start" }}><span>{project.meta}</span></div>
        </div>
      </section>

      <button className="detail-hero-trigger" type="button" aria-label={`放大查看：${project.title} 主視覺`} onClick={() => document.querySelector<HTMLButtonElement>(".lightbox-trigger")?.click()}>
        <img className="detail-hero-image" src={project.image} alt={`${project.title} — ${project.type} hero view`} width={1600} height={1000} loading="eager" fetchPriority="high" decoding="async" />
      </button>

      <section className="detail-body">
        <div className="section-label">The approach</div>
        <div className="detail-copy">
          <h2>Observe.<br />Translate.<br />Make clear.</h2>
          <p>{detail.body}</p>
          <Link className="text-link" style={{ marginTop: "30px" }} href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
          <LightboxGallery
            images={[project.image, ...detail.gallery]}
            altPrefix={project.title}
            galleryLabel={`Image sequence / ${project.type}`}
            galleryTitle={detail.galleryTitle}
            galleryIntro={detail.galleryIntro}
            captions={detail.captions}
          />
        </div>
      </section>
    </div>
  );
}
