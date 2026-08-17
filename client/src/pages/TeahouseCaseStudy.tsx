import { ArrowLeft, ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";
import { Link } from "wouter";
import BackToTop from "@/components/BackToTop";
import LightboxGallery, { type GalleryCategory } from "@/components/Lightbox";
import { useParallax, useReadingProgress, useScrollReveal } from "@/hooks/useScrollReveal";
import { detailData } from "./ProjectDetail";
import { portfolioProjects } from "./Works";

const teahouseSlug = "teahouse-graduation-project";

export default function TeahouseCaseStudy() {
  const project = portfolioProjects.find((item) => item.slug === teahouseSlug);
  const detail = detailData[teahouseSlug];
  const heroRef = useParallax<HTMLButtonElement>(10);
  const readingProgress = useReadingProgress();
  const infoRef = useScrollReveal<HTMLElement>();
  const conceptRef = useScrollReveal<HTMLElement>();
  const sequenceRef = useScrollReveal<HTMLElement>();
  const navigationRef = useScrollReveal<HTMLElement>();

  if (!project || !detail) {
    return <div className="not-found"><h1>404</h1><p>This project is not available yet.</p><Link className="button button-dark" href="/works"><ArrowLeft size={14} /> Back to works</Link></div>;
  }

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === teahouseSlug);
  const previousProject = portfolioProjects[(projectIndex - 1 + portfolioProjects.length) % portfolioProjects.length];
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];
  const images = [project.image, ...detail.gallery];
  const categories = detail.categories ?? [];
  const imageOrder = [0, 3, 1, 5, 2, 7, 4, 8, 6, 10, 9, 11, 13, 12];
  const editorialSections = [
    { index: 0, label: "Atmosphere" },
    { index: 4, label: "Material" },
    { index: 8, label: "Space" },
    { index: 11, label: "Final images" },
  ];

  return (
    <div className="teahouse-case-page">
      <div className="teahouse-reading-progress" aria-label={`案例閱讀進度 ${Math.round(readingProgress * 100)}%`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(readingProgress * 100)}>
        <span style={{ transform: `scaleX(${readingProgress})` }} />
      </div>
      <header className="teahouse-hero">
        <div className="teahouse-hero-top">
          <Link className="teahouse-back-link" href="/works"><ArrowLeft size={14} /> Back to works</Link>
          <span className="teahouse-hero-index">{project.no} / {project.type}</span>
        </div>

        <div className="teahouse-hero-heading">
          <span className="teahouse-kicker">Graduation Project / Interior Architecture</span>
          <h1>TEAHOUSE</h1>
          <p>{detail.intro}</p>
        </div>

        <button ref={heroRef} className="teahouse-hero-image-wrap" type="button" aria-label="放大查看：茶藝館主視覺" onClick={() => document.querySelector<HTMLButtonElement>(".teahouse-gallery .lightbox-trigger")?.click()}>
          <img className="teahouse-hero-image" src={project.image} alt="茶藝館主視覺 — 木格柵、庭院與自然光" width={1800} height={1125} loading="eager" fetchPriority="high" decoding="async" />
          <span className="teahouse-hero-image-label">View project image <ArrowUpRight size={14} /></span>
        </button>

        <div className="teahouse-hero-foot">
          <span>Interior architecture study</span>
          <span className="teahouse-scroll-cue"><MoveDown size={14} /> Scroll to explore</span>
          <span>01—14 / Visual archive</span>
        </div>
      </header>

      <main>
        <section ref={infoRef} className="teahouse-information reveal">
          <div className="teahouse-section-marker"><span>Project information</span><strong>00</strong></div>
          <dl className="teahouse-information-list">
            <div><dt>Title</dt><dd>{project.title}</dd></div>
            <div><dt>Type</dt><dd>{project.meta}</dd></div>
            <div><dt>Study</dt><dd>Graduation Project / Interior Architecture</dd></div>
            <div><dt>Archive</dt><dd>14 visual studies</dd></div>
          </dl>
        </section>

        <section ref={conceptRef} className="teahouse-concept reveal">
          <div className="teahouse-section-marker"><span>01 / Concept</span><strong>01</strong></div>
          <div className="teahouse-concept-content">
            <h2>Observe.<br />Translate.<br />Make clear.</h2>
            <div className="teahouse-concept-copy">
              <p>{detail.body}</p>
              <Link className="teahouse-inline-link" href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </section>

        <section ref={sequenceRef} className="teahouse-sequence reveal" aria-label="茶藝館圖片案例序列">
          <div className="teahouse-sequence-intro">
            <div className="teahouse-section-marker"><span>02—05 / Visual essay</span><strong>14</strong></div>
            <div>
              <span className="teahouse-kicker">Atmosphere / Material / Space / Final images</span>
              <h2>{detail.galleryTitle}</h2>
              <p>{detail.galleryIntro}</p>
            </div>
          </div>
          <div className="teahouse-gallery">
            <LightboxGallery
              images={images}
              imageOrder={imageOrder}
              altPrefix={project.title}
              galleryLabel="Visual archive / Tea house"
              galleryTitle=""
              galleryIntro=""
              captions={detail.captions}
              categories={categories}
              filterable
              layout="editorial"
              editorialSections={editorialSections}
            />
          </div>
        </section>

        <section ref={navigationRef} className="teahouse-navigation reveal" aria-label="案例快速導覽">
          <div className="teahouse-section-marker"><span>Continue exploring</span><strong>06</strong></div>
          <div className="teahouse-navigation-links">
            <Link className="teahouse-navigation-card" href={`/works/${previousProject.slug}`} aria-label={`上一個案例：${previousProject.title}`}>
              <span><ArrowLeft size={14} /> Previous / {previousProject.no}</span>
              <strong>{previousProject.title}</strong>
              <small>{previousProject.type}</small>
            </Link>
            <Link className="teahouse-navigation-card teahouse-navigation-card-next" href={`/works/${nextProject.slug}`} aria-label={`下一個案例：${nextProject.title}`}>
              <span>Next / {nextProject.no} <ArrowRight size={14} /></span>
              <strong>{nextProject.title}</strong>
              <small>{nextProject.type}</small>
            </Link>
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  );
}
