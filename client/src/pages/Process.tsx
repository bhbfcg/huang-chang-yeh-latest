// 黃昌業作品集 style reminder: turn the portfolio's learning path into a transparent
// method, showing how observation becomes a drawing, model, image, and spatial idea.
import { Link } from "wouter";

const steps = [['01', 'Observe', '從生活、文化與基地條件找到空間真正的問題。'], ['02', 'Translate', '把光線、材料、比例與形式轉化成可討論的設計語言。'], ['03', 'Visualize', '用模型、圖面與 3D 視角檢查空間在不同尺度下的表現。'], ['04', 'Refine', '在細節中校準氣氛、動線與使用者的身體感。']];

export default function Process() {
  return <div className="site-page section-sand"><section className="page-hero section-cream"><div className="section-label">Approach</div><h1>Observe.<br />Translate.<br />Make clear.</h1><p>每一個作品都從觀察開始，再透過圖面、模型與影像，將想法整理成可以被看見的關係。</p></section><section className="process-preview section-sand"><div className="section-label">A working method</div><div className="process-content"><div><h2>Move between<br />scales.</h2><p className="process-lead">文化、建築、住宅與物件看似不同，卻都需要回到人的身體、光線的變化與材料的觸感。</p></div><div className="process-steps">{steps.map(([no, title, copy]) => <div className="process-step" key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section><section className="about-intro section-cream"><div className="section-label">What remains</div><div className="about-intro-content"><h2>A space that<br />can be felt.</h2><p className="process-lead">好的空間不只停留在畫面裡。它應該讓光線、材料與人的行走方式，在日常中持續產生關係。</p><Link className="button button-dark" href="/contact">Start a conversation</Link></div></section></div>;
}
