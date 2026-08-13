// COCO Design style reminder: keep the header small, fixed, typographic, and almost
// weightless so the architecture photography remains the first visual voice.
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="黃昌業作品集首頁" onClick={closeMenu}>
      <img className="brand-mark" src="/assets/coco-mark-optimized.png" alt="" width={27} height={27} />
      <span className="brand-wordmark"><span>HUANG</span><span>CHANG-YEH</span></span>
    </Link>
    <button className="mobile-nav-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"} onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
    </button>
    <nav id="primary-navigation" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
      <Link href="/about" onClick={closeMenu}>About</Link>
      <Link href="/works" onClick={closeMenu}>Works</Link>
      <Link href="/services" onClick={closeMenu}>Services</Link>
      <Link href="/process" onClick={closeMenu}>Process</Link>
      <Link href="/contact" onClick={closeMenu}>Contact</Link>
    </nav>
    <Link className="header-cta" href="/contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={13} /></Link>
  </header>;
}
