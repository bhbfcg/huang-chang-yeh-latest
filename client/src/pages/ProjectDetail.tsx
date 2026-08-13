// COCO editorial system: one strong image argument, followed by a measured explanation and gallery.
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { portfolioProjects } from "./Works";

const detailData: Record<string, { intro: string; body: string; gallery: string[] }> = {
  "teahouse-graduation-project": { intro: "A tea house shaped by pause and ritual.", body: "以茶席、行走與停留作為空間秩序，將東方茶文化中的慢、靜與層次轉譯成入口、長廊、座席與服務空間。木格柵、暖色燈光與低尺度家具共同建立較內向的氛圍，使飲茶成為一段從城市節奏中慢下來的過程。", gallery: ["/assets/huang-teahouse-02.webp", "/assets/huang-teahouse-01.webp"] },
  "qipao-retail-interior": { intro: "A retail interior where fabric becomes atmosphere.", body: "以旗袍的布料、身體曲線與展示秩序為出發點，安排深色木作、米白牆面與屏風式櫃體，讓商品在空間中保留距離與視線。設計不以陳列數量取勝，而以光線、框景與行走路徑形成帶有東方氣質的觀看節奏。", gallery: ["/assets/huang-qipao-02.webp", "/assets/huang-qipao-01.webp"] },
  "light-church-tudigong-temple": { intro: "Light turns a familiar ritual into a new threshold.", body: "以光作為進入信仰空間的引導，將傳統土地公廟的屋頂、牌樓與祭祀軸線，重新組織成具有弧形量體與中央入口的建築概念。方案不抹去熟悉的宗教記憶，而是透過尺度、曲面與明暗，把傳統儀式轉化為更開放的公共性場景。", gallery: ["/assets/huang-temple-02.webp", "/assets/huang-temple-01.webp"] },
  "yongji-18f-visualization": { intro: "A calm residential scheme built around light and proportion.", body: "以住宅日常為核心，透過灰白基底、木質櫃體、石紋餐桌與窗簾層次，建立穩定而可落地的生活場景。客廳、餐廳與收納被視為連續的空間系統，3D 視覺化則用來檢查比例、視線與燈光在不同角度下的關係。", gallery: ["/assets/huang-yongji-18-01.webp", "/assets/huang-yongji-13-03.webp"] },
  "yongji-13f-visualization": { intro: "One home, read through a sequence of rooms.", body: "從客廳、餐廳到臥室、衛浴與更衣間，透過一組完整的視角檢視住宅的材質連續性與生活動線。白灰、米色與黑色細框構成安靜的基底，讓光線、收納與家具比例成為畫面中的主要設計語言。", gallery: ["/assets/huang-yongji-13-02.webp", "/assets/huang-yongji-13-03.webp"] },
  "rhino-form-study": { intro: "Studying how surfaces become structure.", body: "以流線、孔洞、骨架與表皮作為形式研究，觀察一個物件如何在曲面、結構與陰影之間找到平衡。這些練習不直接追求完成品，而是保留建模過程中的推演性，作為空間與產品尺度設計的形式基礎。", gallery: ["/assets/huang-rhino-02.webp", "/assets/huang-rhino-01.webp"] },
  "yushan-community-3d": { intro: "Turning a residential brief into a lived-in image.", body: "以客廳與餐廳情境呈現住宅配置的完整性，練習將平面需求轉化為光線、家具、材質與生活物件共同構成的畫面。這組作品反映實務協作中的視覺表達能力，也說明 3D 圖像如何幫助設計溝通。", gallery: ["/assets/huang-yushan-02.webp", "/assets/huang-yushan-01.webp"] },
};

export default function ProjectDetail() {
  const [, params] = useRoute<{ slug: string }>("/works/:slug");
  const project = params ? portfolioProjects.find((item) => item.slug === params.slug) : undefined;
  const detail = params ? detailData[params.slug] : undefined;
  if (!project || !detail) return <div className="not-found"><h1>404</h1><p>This project is not available yet.</p><Link className="button button-dark" href="/works"><ArrowLeft size={14} /> Back to works</Link></div>;
  return <div className="detail-page"><section className="detail-intro"><div><Link className="text-link" href="/works"><ArrowLeft size={14} /> Back to works</Link><div className="section-label" style={{ marginTop: "4rem" }}>{project.type}</div></div><div><h1>{project.title}</h1><p>{detail.intro}</p><div className="project-meta" style={{ marginTop: "22px", justifyContent: "flex-start" }}><span>{project.meta}</span></div></div></section><img className="detail-hero-image" src={project.image} alt={`${project.title} — ${project.type} hero view`} width={1600} height={1000} loading="eager" fetchPriority="high" decoding="async" /><section className="detail-body"><div className="section-label">The approach</div><div className="detail-copy"><h2>Observe.<br />Translate.<br />Make clear.</h2><p>{detail.body}</p><Link className="text-link" style={{ marginTop: "30px" }} href="/contact">Start a conversation <ArrowUpRight size={14} /></Link><div className="detail-gallery">{detail.gallery.map((image, index) => <img src={image} alt={`${project.title} project view ${index + 1}`} width={900} height={1125} loading="lazy" decoding="async" key={image} />)}</div></div></section></div>;
}
