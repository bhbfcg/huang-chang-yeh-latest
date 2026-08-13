// 黃昌業作品集 style reminder: keep the reference site's quiet editorial rhythm,
// but replace the studio-home story with a personal practice spanning space, form and 3D.
import { ArrowUpRight, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";

const assets = {
  heroBefore: "/manus-storage/coco-before_f8abc779.png",
  heroAfter: "/manus-storage/coco-after-original_7955ae19.png",
  teahouse: "/manus-storage/huang-teahouse-02_05996c5c.webp",
  qipao: "/manus-storage/huang-qipao-01_4899a879.webp",
  temple: "/manus-storage/huang-temple-01_851f73e7.webp",
};

function HeroCompare() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [point, setPoint] = useState({ x: 42, y: 50 });
  const [isTouch, setIsTouch] = useState(() => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches);
  const [slider, setSlider] = useState(50);
  const updatePoint = (clientX: number, clientY: number) => {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPoint({ x: ((clientX - bounds.left) / bounds.width) * 100, y: ((clientY - bounds.top) / bounds.height) * 100 });
  };
  return <section className="hero-compare" ref={stageRef} onPointerEnter={(event) => { setIsTouch(event.pointerType !== "mouse"); updatePoint(event.clientX, event.clientY); }} onPointerMove={(event) => { if (event.pointerType !== "mouse" && !event.buttons) return; updatePoint(event.clientX, event.clientY); }} style={{ "--cursor-x": `${point.x}%`, "--cursor-y": `${point.y}%`, "--mobile-reveal": `${slider}%` } as React.CSSProperties} aria-label="Before and after interior transformation">
    <img className="hero-image hero-before" src={assets.heroBefore} alt="Before renovation" />
    <img className={`hero-image hero-after ${isTouch ? "hero-after-touch" : ""}`} src={assets.heroAfter} alt="After renovation" />
    <div className="hero-overlay" />
    <div className="hero-copy"><p className="eyebrow">COCO DESIGN / INTERIOR STUDIO</p><h1>Designing Spaces,<br />Elevating Life.</h1><p className="hero-cn">設計空間，提升生活質感。</p><Link className="button button-dark" href="/works">View our works <MoveRight size={14} /></Link></div>
    <p className="hero-hint"><span className="hint-line" />{isTouch ? "Drag to reveal after" : "Move cursor to reveal after"}</p>
    <div className="mobile-compare-control"><label htmlFor="compare-slider">Two scales</label><input id="compare-slider" type="range" min="0" max="100" value={slider} onChange={(event) => { setIsTouch(true); setSlider(Number(event.target.value)); }} /></div>
  </section>;
}

const projects = [
  { no: "01", type: "Cultural space", title: "畢業設計—茶藝館", meta: "Graduation project / Tea house", image: assets.teahouse, slug: "teahouse-graduation-project" },
  { no: "02", type: "Architecture concept", title: "光引教堂—土地公廟", meta: "Sacred space / Concept study", image: assets.temple, slug: "light-church-tudigong-temple" },
  { no: "03", type: "Residential visualization", title: "永吉路 3D 13 樓", meta: "Multi-room study / 3D", image: "/manus-storage/huang-yongji-13-01_b6f4ee07.webp", slug: "yongji-13f-visualization" },
];

export default function Home() {
  return <div className="site-page home-page"><HeroCompare />
    <section className="about-intro section-cream" id="about"><div className="section-label">About Huang</div><div className="about-intro-content"><h2>Designing the<br />space between<br />light and life.</h2><p className="process-lead">我是黃昌業，一名受室內設計訓練的設計學習者，關注空間如何透過材質、光線與尺度，從一張圖面逐步變成可以被感受的場景。</p><Stats /></div></section>
    <section className="works-preview section-sand" id="works"><div className="section-heading-row"><div><div className="section-label">Selected works</div><h2>Different scales,<br />one way of looking.</h2></div><Link className="text-link" href="/works">View all works <ArrowUpRight size={15} /></Link></div><div className="project-grid">{projects.map((project, index) => <Link className={`project-card project-${index + 1}`} href={`/works/${project.slug}`} key={project.slug}><div className="project-image-wrap"><img src={project.image} alt={project.title} /></div><div className="project-rule" /><div className="project-meta"><span>{project.no} / {project.type}</span><span>{project.meta}</span></div><h3>{project.title}</h3></Link>)}</div></section>
    <section className="services-preview section-cream" id="services"><div className="section-label">Practice</div><div className="services-content"><h2>From form study<br />to lived space.</h2><div className="service-list"><div><span>01</span><div><h3>Spatial atmosphere</h3><p>用光線、材料與尺度，整理空間的情緒與日常節奏。</p></div></div><div><span>02</span><div><h3>3D visualization</h3><p>以視角、材質與燈光，把平面概念轉化成可被討論的畫面。</p></div></div><div><span>03</span><div><h3>Form research</h3><p>透過 Rhino 模型與曲面研究，探索空間與物件的形式可能。</p></div></div></div></div></section>
    <section className="process-preview section-sand" id="process"><div className="section-label">Approach</div><div className="process-content"><div><h2>Observe.<br />Translate.<br />Make clear.</h2><p className="process-lead">每一個作品都從觀察開始：先理解人如何使用空間，再以圖面、模型與影像，把想法整理成可以被看見的關係。</p></div><div className="process-steps">{[['01', 'Observe', '從生活、文化與基地條件找到空間真正的問題。'], ['02', 'Translate', '把光線、材料、比例與形式轉化成可討論的設計語言。'], ['03', 'Visualize', '用模型、圖面與 3D 視角檢查空間在不同尺度下的表現。'], ['04', 'Refine', '在細節中校準氣氛、動線與使用者的身體感。']].map(([no, title, copy]) => <div className="process-step" key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>
    <section className="point-of-view section-cream"><div className="section-label">Point of view</div><blockquote>A space begins as an idea. It becomes real when light, material, and the body agree.</blockquote></section>
    <section className="start-project section-dark" id="contact"><div className="section-label">Start a conversation</div><div className="start-content"><h2>Let’s make the<br />idea inhabitable.</h2><Link className="button button-light" href="/contact">Get in touch <ArrowUpRight size={15} /></Link></div></section>
  </div>;
}

function Stats() {
  return <div className="stats-row"><div><strong>2020</strong><span>瑞芳高工<br />室內設計科</span></div><div><strong>2024</strong><span>中國科技大學<br />室內設計系</span></div><div><strong>嘉義</strong><span>Born in<br />2001.12.17</span></div></div>;
}
