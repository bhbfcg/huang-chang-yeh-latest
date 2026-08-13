// 黃昌業作品集 style reminder: organize the work by scale and medium, keeping the
// same editorial image rhythm while making the portfolio breadth immediately legible.
import { Link } from "wouter";

export const portfolioProjects = [
  { no: "01", type: "Cultural space", title: "畢業設計—茶藝館", meta: "Graduation project / Tea house", image: "/assets/huang-teahouse-01.webp", slug: "teahouse-graduation-project", desc: "以茶席、行走與停留作為空間秩序，將東方茶文化中的慢與靜轉譯成入口、長廊與座席。" },
  { no: "02", type: "Retail interior", title: "旗袍店", meta: "Commercial interior / Retail", image: "/assets/huang-qipao-01.webp", slug: "qipao-retail-interior", desc: "以布料、身體曲線與展示秩序為出發點，讓商品在光線與屏風式櫃體之間保留觀看距離。" },
  { no: "03", type: "Architecture concept", title: "光引教堂—土地公廟", meta: "Sacred space / Concept study", image: "/assets/huang-temple-01.webp", slug: "light-church-tudigong-temple", desc: "以光作為進入信仰空間的引導，將熟悉的宗教記憶轉化為具有公共性的建築門檻。" },
  { no: "04", type: "Residential visualization", title: "永吉路 3D 18 樓", meta: "Collaboration / 3D visualization", image: "/assets/huang-yongji-18-01.webp", slug: "yongji-18f-visualization", desc: "以灰白基底、木質櫃體與窗簾層次，建立穩定而可落地的住宅生活場景。" },
  { no: "05", type: "Residential visualization", title: "永吉路 3D 13 樓", meta: "Multi-room study / 3D", image: "/assets/huang-yongji-13-01.webp", slug: "yongji-13f-visualization", desc: "從客廳、餐廳到臥室、衛浴與更衣間，檢視住宅的材質連續性與生活動線。" },
  { no: "06", type: "Form study", title: "Rhino 模型練習", meta: "Rhino practice / Form research", image: "/assets/huang-rhino-01.webp", slug: "rhino-form-study", desc: "以流線、孔洞、骨架與表皮作為形式研究，觀察物件如何在曲面、結構與陰影之間找到平衡。" },
  { no: "07", type: "Professional visualization", title: "實習公司／玉山社區 3D", meta: "Internship project / Visualization", image: "/assets/huang-yushan-01.webp", slug: "yushan-community-3d", desc: "練習將住宅平面需求轉化為光線、家具、材質與生活物件共同構成的畫面。" },
];

export default function Works() {
  return <div className="site-page section-sand"><section className="page-hero section-cream"><div className="section-label">Selected works</div><h1>Different scales,<br />one way of looking.</h1><p>從文化空間、建築概念到住宅 3D 與形式研究，作品記錄我如何觀察並整理空間。</p><div className="text-link-row"><a href="#cultural">Cultural</a><a href="#residential">Residential</a><a href="#form">Form study</a></div></section><section className="works-preview section-sand"><div className="project-grid">{portfolioProjects.map((project, index) => <Link className={`project-card project-${(index % 3) + 1}`} href={`/works/${project.slug}`} key={project.slug}><div className="project-image-wrap"><img src={project.image} alt={project.title} /></div><div className="project-rule" /><div className="project-meta"><span>{project.no} / {project.type}</span><span>{project.meta}</span></div><h3>{project.title}</h3><p className="work-card-desc">{project.desc}</p></Link>)}</div></section></div>;
}
