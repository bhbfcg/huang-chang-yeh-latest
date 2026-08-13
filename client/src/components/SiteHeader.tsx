// COCO Design style reminder: keep the header small, fixed, typographic, and almost
// weightless so the architecture photography remains the first visual voice.
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="黃昌業作品集首頁">
      <img className="brand-mark" src="/assets/coco-mark.png" alt="" />
      <span className="brand-wordmark"><span>HUANG</span><span>CHANG-YEH</span></span>
    </Link>
    <nav className="site-nav" aria-label="Primary navigation">
      <Link href="/about">About</Link>
      <Link href="/works">Works</Link>
      <Link href="/services">Services</Link>
      <Link href="/process">Process</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <Link className="header-cta" href="/contact">Get in touch <ArrowUpRight size={13} /></Link>
  </header>;
}
