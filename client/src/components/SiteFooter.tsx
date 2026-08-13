// COCO Design style reminder: end with a calm studio statement, a single atmospheric
// image, and a simple escape route rather than a dense utility footer.
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="section-label">COCO Design</div>
    <div className="footer-main">
      <h2>Spaces made to feel calm, complete, and lived in.</h2>
      <div className="footer-links">
        <Link href="/about">About</Link><Link href="/works">Works</Link><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/contact">Contact</Link>
        <img className="footer-image" src="/manus-storage/coco-living_d389328c.png" alt="Sunlit reading corner interior" />
      </div>
    </div>
    <div className="footer-bottom"><a className="footer-email" href="mailto:hello@cocodesign.studio">hello@cocodesign.studio</a><span className="footer-meta">Shanghai / Remote by appointment <ArrowUpRight size={13} /></span></div>
  </footer>;
}
