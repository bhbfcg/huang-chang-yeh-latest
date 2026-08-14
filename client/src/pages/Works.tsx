// COCO editorial system: a calm case-study index with generous whitespace and staggered image rhythm.
import { Link } from "wouter";

export const portfolioProjects = [
  { no: "01", type: "Cultural space", title: "茶藝館", meta: "Cultural space / Tea house", image: "/assets/picture1-teahouse-01.webp", slug: "teahouse-graduation-project", desc: "以茶席、行走與停留作為空間秩序，將東方茶文化中的慢與靜轉譯成入口、長廊與座席。" },
  { no: "02", type: "Retail interior", title: "旗袍店", meta: "Commercial interior / Retail", image: "/assets/picture1-qipao-01.webp", slug: "qipao-retail-interior", desc: "以布料、身體曲線與展示秩序為出發點，讓商品在光線與屏風式櫃體之間保留觀看距離。" },
  { no: "03", type: "Architecture concept", title: "土地公廟", meta: "Sacred space / Concept study", image: "/assets/picture1-temple-01.webp", slug: "light-church-tudigong-temple", desc: "以傳統土地公廟的屋頂、牌樓與祭祀動線為起點，重新整理弧形量體與中央入口，探索宗教記憶與當代公共空間之間的連結。" },
  { no: "04", type: "Residential visualization", title: "璞真永吉 18 樓", meta: "Residential visualization / Interior study", image: "/assets/picture1-yongji18-01.webp", slug: "yongji-18f-visualization", desc: "以灰白基底、木質櫃體與窗簾層次，建立穩定而可落地的住宅生活場景。" },
  { no: "05", type: "Residential visualization", title: "璞真永吉 13 樓", meta: "Residential visualization / Interior study", image: "/assets/picture1-yongji13-01.webp", slug: "yongji-13f-visualization", desc: "從客廳、餐廳到臥室、衛浴與更衣間，檢視住宅的材質連續性與生活動線。" },
  { no: "06", type: "Spatial & form study", title: "Rhino 空間與形式研究", meta: "Spatial & form study / Rhino visualization", image: "/assets/picture1-rhino-01.webp", slug: "rhino-form-study", desc: "以 Rhino 建模建立從曲面量體到室內空間的連續研究，透過材質、光線與家具配置，檢視形式如何轉化為可被感受的場景。" },
  { no: "07", type: "Residential visualization", title: "玉山社區", meta: "Residential visualization / Interior study", image: "/assets/picture1-yushan-01.webp", slug: "yushan-community-3d", desc: "以客廳與餐廳情境整理住宅配置，將光線、家具、材質與生活物件轉化為清楚的空間畫面。" },
];

export default function Works() {
  return <div className="site-page section-sand"><section className="page-hero section-cream"><div className="section-label">Selected works</div><h1>Different scales,<br />one way of looking.</h1><p>從文化空間、建築概念到住宅 3D 與形式研究，作品記錄我如何觀察並整理空間。</p><div className="text-link-row"><a href="#cultural">Cultural</a><a href="#residential">Residential</a><a href="#form">Form study</a></div></section><section className="works-preview section-sand"><div className="project-grid">{portfolioProjects.map((project, index) => <Link className={`project-card project-${(index % 3) + 1}`} href={`/works/${project.slug}`} key={project.slug}><div className="project-image-wrap"><img src={project.image} alt={`${project.title} — ${project.type}`} width={900} height={1125} loading={index < 3 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" /></div><div className="project-rule" /><div className="project-meta"><span>{project.no} / {project.type}</span><span>{project.meta}</span></div><h3>{project.title}</h3><p className="work-card-desc">{project.desc}</p></Link>)}</div></section></div>;
}
