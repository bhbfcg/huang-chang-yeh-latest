// COCO Design style reminder: end with a calm studio statement, a single atmospheric
// image, and a simple escape route rather than a dense utility footer.
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="section-label">黃昌業 / Portfolio</div>
    <div className="footer-main">
      <h2>Spaces shaped by light, material, and form.</h2>
      <div className="footer-links">
        <Link href="/about">About</Link><Link href="/works">Works</Link><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/contact">Contact</Link>
        <img className="footer-image" src="/assets/huang-yongji-13-02.webp" alt="璞真永吉 13 樓住宅客廳" width={1200} height={675} loading="lazy" decoding="async" />
      </div>
    </div>
    <div className="footer-bottom"><a className="footer-email" href="mailto:18141570j@gmail.com">18141570j@gmail.com</a><span className="footer-meta">嘉義出生 / 室內設計與空間可視化 <ArrowUpRight size={13} /></span></div>
  </footer>;
}
