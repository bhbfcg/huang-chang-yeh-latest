// COCO Design style reminder: use editorial spacing and direct, tactile language to
// make the studio feel considered without becoming corporate or decorative.
import { Link } from "wouter";

export default function About() {
  return <div className="site-page section-cream">
    <section className="page-hero"><div className="section-label">About studio</div><h1>Designing the<br />quietly essential.</h1><p>COCO Design is a residential interior studio shaping homes around the way people actually move, gather, rest, and live.</p></section>
    <section className="about-intro section-sand"><div className="section-label">Our point of view</div><div className="about-intro-content"><h2>We design homes<br />that feel edited,<br />tactile, and easy to<br />live in.</h2><p className="process-lead">The work begins with listening. We remove visual noise, tune the light, and make the everyday feel more intentional without making it feel staged.</p><Link className="button button-dark" href="/contact">Start a project</Link></div></section>
    <section className="services-preview section-cream"><div className="section-label">What we value</div><div className="services-content"><h2>Quiet is not<br />empty.</h2><div className="service-list"><div><span>01</span><div><h3>Light</h3><p>We let daylight, warmth and shadow establish the atmosphere before objects arrive.</p></div></div><div><span>02</span><div><h3>Material</h3><p>We choose tactile surfaces that become more familiar, not less, with daily use.</p></div></div><div><span>03</span><div><h3>Living</h3><p>We design around rituals, storage and movement so the room can stay calm.</p></div></div></div></div></section>
  </div>;
}
