// COCO Design style reminder: show the process as a visible, reassuring sequence;
// every step should feel compact, clear, and grounded in real site delivery.
import { Link } from "wouter";

const steps = [['01', 'Listen', '梳理生活習慣、預算邊界與審美偏好。'], ['02', 'Shape', '完成平面、材質、燈光與關鍵立面的設計推演。'], ['03', 'Refine', '以節點清單跟進施工、採購與現場調整。'], ['04', 'Settle', '軟裝進場、細節校準，交付可以直接生活的空間。']];

export default function Process() {
  return <div className="site-page section-sand"><section className="page-hero section-cream"><div className="section-label">Process</div><h1>Calm decisions.<br />Clear delivery.</h1><p>We keep the process compact, visible, and grounded in what the space needs to support every day.</p></section><section className="process-preview section-sand"><div className="section-label">Our rhythm</div><div className="process-content"><h2>A clearer way<br />to make space.</h2><div className="process-steps">{steps.map(([no, title, copy]) => <div className="process-step" key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section><section className="about-intro section-cream"><div className="section-label">After the handover</div><div className="about-intro-content"><h2>A home that<br />keeps working.</h2><p className="process-lead">The result is not a photograph. It is a room that holds the way you live, with enough calm left for what comes next.</p><Link className="button button-dark" href="/contact">Start a project</Link></div></section></div>;
}
