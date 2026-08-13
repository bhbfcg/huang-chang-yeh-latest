// COCO Design style reminder: quiet transformations, open breathing room, and a hero
// that makes the design process tangible before the user reads a word.
import { ArrowUpRight, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";

const assets = {
  before: "/manus-storage/coco-before_f8abc779.png",
  after: "/manus-storage/coco-after-original_7955ae19.png",
  living: "/manus-storage/coco-project-living-original_42028b94.png",
  dining: "/manus-storage/coco-project-dining-original_1c86ecd9.png",
  bedroom: "/manus-storage/coco-project-bedroom-original_33a24536.png",
};

function HeroCompare() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [point, setPoint] = useState({ x: 58, y: 50 });
  const [isTouch, setIsTouch] = useState(() => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches);
  const [slider, setSlider] = useState(50);

  const updatePoint = (clientX: number, clientY: number) => {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPoint({
      x: ((clientX - bounds.left) / bounds.width) * 100,
      y: ((clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return (
    <section
      className="hero-compare"
      ref={stageRef}
      onPointerEnter={(event) => {
        setIsTouch(event.pointerType !== "mouse");
        updatePoint(event.clientX, event.clientY);
      }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" && !event.buttons) return;
        updatePoint(event.clientX, event.clientY);
      }}
      style={{
        "--cursor-x": `${point.x}%`,
        "--cursor-y": `${point.y}%`,
        "--mobile-reveal": `${slider}%`,
      } as React.CSSProperties}
      aria-label="Before and after interior transformation"
    >
      <img className="hero-image hero-before" src={assets.before} alt="Before renovation" />
      <img className={`hero-image hero-after ${isTouch ? "hero-after-touch" : ""}`} src={assets.after} alt="After renovation" />
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow">COCO DESIGN / INTERIOR STUDIO</p>
        <h1>Designing Spaces,<br />Elevating Life.</h1>
        <p className="hero-cn">設計空間，提升生活質感。</p>
        <Link className="button button-dark" href="/works">View our works <MoveRight size={14} /></Link>
      </div>
      <p className="hero-hint"><span className="hint-line" />{isTouch ? "Drag to reveal after" : "Move cursor to reveal after"}</p>
      <div className="mobile-compare-control">
        <label htmlFor="compare-slider">Before / After</label>
        <input id="compare-slider" type="range" min="0" max="100" value={slider} onChange={(event) => { setIsTouch(true); setSlider(Number(event.target.value)); }} />
      </div>
    </section>
  );
}

const projects = [
  { no: "01", type: "Living", title: "Light-drawn family lounge", meta: "Residential renovation / 128 sqm", image: assets.living, slug: "light-drawn-family-lounge" },
  { no: "02", type: "Dining", title: "City kitchen with quiet evening light", meta: "Apartment design / 96 sqm", image: assets.dining, slug: "city-kitchen-evening-light" },
  { no: "03", type: "Bedroom", title: "Textured bedroom retreat", meta: "Primary suite / 42 sqm", image: assets.bedroom, slug: "textured-bedroom-retreat" },
];

function Stats() {
  return <div className="stats-row">
    <div><strong>36</strong><span>Completed private<br />residences</span></div>
    <div><strong>08</strong><span>Cities with built<br />projects</span></div>
    <div><strong>1:1</strong><span>Design to site<br />coordination</span></div>
  </div>;
}

export default function Home() {
  return <div className="site-page home-page">
    <HeroCompare />

    <section className="about-intro section-cream" id="about">
      <div className="section-label">About studio</div>
      <div className="about-intro-content">
        <h2>We design homes<br />that feel edited,<br />tactile, and easy to<br />live in.</h2>
        <Stats />
      </div>
    </section>

    <section className="works-preview section-sand" id="works">
      <div className="section-heading-row">
        <div><div className="section-label">Selected works</div><h2>Quiet transformations</h2></div>
        <Link className="text-link" href="/contact">Start a project <ArrowUpRight size={15} /></Link>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <Link className={`project-card project-${index + 1}`} href={`/works/${project.slug}`} key={project.slug}>
          <div className="project-image-wrap"><img src={project.image} alt={project.title} /></div>
          <div className="project-rule" />
          <div className="project-meta"><span>{project.no} / {project.type}</span><span>{project.meta}</span></div>
          <h3>{project.title}</h3>
        </Link>)}
      </div>
    </section>

    <section className="services-preview section-cream" id="services">
      <div className="section-label">Services</div>
      <div className="services-content">
        <h2>From first sketch<br />to final atmosphere.</h2>
        <div className="service-list">
          <div><span>01</span><div><h3>Interior planning</h3><p>從格局、動線到材質比例，建立空間的長期使用秩序。</p></div></div>
          <div><span>02</span><div><h3>Renovation design</h3><p>整合硬裝、燈光、收納與軟裝，讓舊空間獲得清晰的新生活方式。</p></div></div>
          <div><span>03</span><div><h3>Styling direction</h3><p>為住宅、樣板間與商業空間完成家具、藝術品和陳列落地。</p></div></div>
        </div>
      </div>
    </section>

    <section className="process-preview section-sand" id="process">
      <div className="section-label">Process</div>
      <div className="process-content">
        <div><h2>Calm decisions.<br />Clear delivery.</h2><p className="process-lead">We keep the process compact, visible, and grounded in what the space needs to support every day.</p></div>
        <div className="process-steps">
          {[['01', 'Listen', '梳理生活習慣、預算邊界與審美偏好。'], ['02', 'Shape', '完成平面、材質、燈光與關鍵立面的設計推演。'], ['03', 'Refine', '以節點清單跟進施工、採購與現場調整。'], ['04', 'Settle', '軟裝進場、細節校準，交付可以直接生活的空間。']].map(([no, title, copy]) => <div className="process-step" key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}
        </div>
      </div>
    </section>

    <section className="point-of-view section-cream"><div className="section-label">Point of view</div><blockquote>The best interiors do not announce themselves. They quietly make daily life feel more considered.</blockquote></section>

    <section className="start-project section-dark" id="contact">
      <div className="section-label">Start a project</div>
      <div className="start-content"><h2>Let us shape<br />your next interior.</h2><Link className="button button-light" href="/contact">Start a project <ArrowUpRight size={15} /></Link></div>
    </section>
  </div>;
}
