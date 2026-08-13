// COCO editorial system: keep route metadata as carefully composed as the visible page.
import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_ORIGIN = "https://starlit-gumption-dbd01e.netlify.app";
const DEFAULT_IMAGE = `${SITE_ORIGIN}/assets/coco-after-original.webp`;

const routeMeta = (path: string) => {
  if (path === "/") return {
    title: "黃昌業｜室內設計與空間視覺化作品集",
    description: "黃昌業的室內設計、文化空間、住宅 3D 視覺化與形式研究作品集。以光線、材料與尺度整理可被感受的空間。",
    type: "website",
  };
  if (path === "/about") return { title: "About｜黃昌業 — 室內設計與空間視覺化", description: "認識黃昌業的設計背景、學習路徑與觀察空間的方法。", type: "profile" };
  if (path === "/works") return { title: "Works｜黃昌業 — 室內設計與空間視覺化", description: "瀏覽茶藝館、旗袍店、土地公廟、璞真永吉 13 樓、Rhino 空間與形式研究及玉山社區作品。", type: "website" };
  if (path === "/services") return { title: "Services｜黃昌業 — 空間設計與 3D 視覺化", description: "空間氛圍、3D 視覺化與形式研究服務，從概念整理到可被討論的空間畫面。", type: "website" };
  if (path === "/process") return { title: "Process｜黃昌業 — Observe. Translate. Make clear.", description: "了解黃昌業如何從觀察、轉譯、視覺化到細節校準，整理設計流程。", type: "website" };
  if (path === "/contact") return { title: "Contact｜黃昌業 — 開始一段空間對話", description: "聯絡黃昌業，討論室內設計、空間視覺化、作品合作與設計提案。", type: "website" };
  if (path.startsWith("/works/")) return { title: "Project｜黃昌業 — 室內設計與空間視覺化案例", description: "查看黃昌業的專案案例、設計方法、空間敘事與 3D 視覺化細節。", type: "article" };
  return { title: "黃昌業｜室內設計與空間視覺化作品集", description: "黃昌業的室內設計與空間視覺化作品集。", type: "website" };
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export default function SiteSeo() {
  const [location] = useLocation();
  const meta = routeMeta(location);

  useEffect(() => {
    const canonical = `${SITE_ORIGIN}${location === "/" ? "/" : location}`;
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", meta.type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
    setLink("canonical", canonical);

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "黃昌業",
        jobTitle: "Interior Design & Spatial Visualization",
        url: SITE_ORIGIN,
        email: "18141570j@gmail.com",
        telephone: "+886918251628",
        birthPlace: "嘉義, Taiwan",
        alumniOf: ["瑞芳高工 室內設計科", "中國科技大學 室內設計系"],
      },
      {
        "@context": "https://schema.org",
        "@type": location === "/works" ? "CollectionPage" : "WebSite",
        name: meta.title,
        description: meta.description,
        url: canonical,
        inLanguage: "zh-Hant",
        image: DEFAULT_IMAGE,
      },
    ];
    let script = document.head.querySelector<HTMLScriptElement>('script[data-site-schema="true"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.siteSchema = "true";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [location, meta.description, meta.title, meta.type]);

  return null;
}
