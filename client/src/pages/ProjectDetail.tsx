// COCO editorial system: one strong image argument, followed by a measured explanation and gallery.
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { portfolioProjects } from "./Works";

const detailData: Record<string, { intro: string; body: string; gallery: string[] }> = {
  "teahouse-graduation-project": { intro: "A tea house shaped by pause and ritual.", body: "以茶席、行走與停留作為空間秩序，將東方茶文化中的慢、靜與層次轉譯成入口、長廊、座席與服務空間。木格柵、暖色燈光與低尺度家具共同建立較內向的氛圍，使飲茶成為一段從城市節奏中慢下來的過程。", gallery: ["/assets/picture1-teahouse-02.webp", "/assets/picture1-teahouse-03.webp", "/assets/picture1-teahouse-04.webp", "/assets/picture1-teahouse-05.webp"] },
  "qipao-retail-interior": { intro: "A retail interior where fabric becomes atmosphere.", body: "以旗袍的布料、身體曲線與展示秩序為出發點，安排深色木作、米白牆面與屏風式櫃體，讓商品在空間中保留距離與視線。設計不以陳列數量取勝，而以光線、框景與行走路徑形成帶有東方氣質的觀看節奏。", gallery: ["/assets/picture1-qipao-02.webp", "/assets/picture1-qipao-03.webp", "/assets/picture1-qipao-04.webp", "/assets/picture1-qipao-05.webp", "/assets/picture1-qipao-06.webp"] },
  "light-church-tudigong-temple": { intro: "A temple shaped by ritual, threshold, and form.", body: "以傳統土地公廟的屋頂、牌樓與祭祀軸線為起點，重新組織弧形量體與中央入口。方案保留熟悉的宗教記憶，再透過尺度、曲面與明暗關係，探索更開放的公共性場景。", gallery: ["/assets/picture1-temple-02.webp", "/assets/picture1-temple-03.webp"] },
  "yongji-18f-visualization": { intro: "A calm residential scheme built around light and proportion.", body: "以住宅日常為核心，透過灰白基底、木質櫃體、石紋餐桌與窗簾層次，建立穩定而可落地的生活場景。客廳、餐廳與收納被視為連續的空間系統，3D 視覺化則用來檢查比例、視線與燈光在不同角度下的關係。", gallery: ["/assets/picture1-yongji18-02.webp", "/assets/picture1-yongji18-03.webp"] },
  "yongji-13f-visualization": { intro: "One home, read through a sequence of rooms.", body: "從客廳、餐廳到臥室、衛浴與更衣間，透過一組完整的視角檢視住宅的材質連續性與生活動線。白灰、米色與黑色細框構成安靜的基底，讓光線、收納與家具比例成為畫面中的主要設計語言。", gallery: ["/assets/picture1-yongji13-02.webp", "/assets/picture1-yongji13-03.webp", "/assets/picture1-yongji13-04.webp", "/assets/picture1-material-bath.webp"] },
  "rhino-form-study": { intro: "From modeled form to an inhabitable interior.", body: "以 Rhino 建立量體、格線與室內空間配置，透過牆面分割、家具比例、光線與材質，觀察形式如何從模型進入實際生活場景。圖組同時保留曲面量體、骨架結構與室內渲染，呈現從建模推演到空間表達的連續過程。", gallery: ["/assets/picture1-rhino-02.webp", "/assets/picture1-rhino-03.webp", "/assets/picture1-rhino-04.webp", "/assets/picture1-rhino-05.webp", "/assets/picture1-rhino-06.webp", "/assets/picture1-rhino-07.webp"] },
  "yushan-community-3d": { intro: "A residential space composed through light and proportion.", body: "以客廳與餐廳情境整理住宅配置，將光線、家具、材質與生活物件轉化為清楚的空間畫面。這組作品聚焦於住宅視覺化如何協助理解比例、動線與日常使用。", gallery: ["/assets/picture1-yushan-02.webp"] },
};

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/works/:slug");
  const project = params ? portfolioProjects.find((item) => item.slug === params.slug) : undefined;
  const detail = params ? detailData[params.slug] : undefined;
  if (!project || !detail) return <div className="not-found"><h1>404</h1><p>This project is not available yet.</p><Link className="button button-dark" href="/works"><ArrowLeft size={14} /> Back to works</Link></div>;
  return <div className="detail-page"><section className="detail-intro"><div><Link className="text-link" href="/works"><ArrowLeft size={14} /> Back to works</Link><div className="section-label" style={{ marginTop: "4rem" }}>{project.type}</div></div><div><h1>{project.title}</h1><p>{detail.intro}</p><div className="project-meta" style={{ marginTop: "22px", justifyContent: "flex-start" }}><span>{project.meta}</span></div></div></section><img className="detail-hero-image" src={project.image} alt={`${project.title} — ${project.type} hero view`} width={1600} height={1000} loading="eager" fetchPriority="high" decoding="async" /><section className="detail-body"><div className="section-label">The approach</div><div className="detail-copy"><h2>Observe.<br />Translate.<br />Make clear.</h2><p>{detail.body}</p><Link className="text-link" style={{ marginTop: "30px" }} href="/contact">Start a conversation <ArrowUpRight size={14} /></Link><div className="detail-gallery">{detail.gallery.map((image, index) => <img src={image} alt={`${project.title} project view ${index + 1}`} width={900} height={1125} loading="lazy" decoding="async" key={image} />)}</div></div></section></div>;
}
