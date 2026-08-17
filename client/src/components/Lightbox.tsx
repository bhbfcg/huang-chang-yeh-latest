// COCO editorial system: a quiet, tactile image sequence with magazine-style pacing, captions, and focused viewing.
import { ArrowDown, Box, ChevronLeft, ChevronRight, Maximize2, RotateCcw, SunMedium } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export type GalleryCategory = "flow" | "material" | "light";

const categoryOptions = [
  { id: "flow" as const, label: "空間動線", icon: ArrowDown },
  { id: "material" as const, label: "材質細節", icon: Box },
  { id: "light" as const, label: "光影變化", icon: SunMedium },
];

type LightboxGalleryProps = {
  images: string[];
  altPrefix: string;
  galleryLabel?: string;
  galleryTitle?: string;
  galleryIntro?: string;
  captions?: string[];
  categories?: GalleryCategory[][];
  filterable?: boolean;
  layout?: "default" | "editorial";
  editorialSections?: Array<{ index: number; label: string }>;
};

export default function LightboxGallery({
  images,
  altPrefix,
  galleryLabel = "Image sequence",
  galleryTitle = "A closer reading of the space.",
  galleryIntro = "每一張影像都是一次觀看距離的調整，從整體比例到材料、光線與生活尺度，讓空間在不同視角中逐步展開。",
  captions = [],
  categories = [],
  filterable = false,
  layout = "default",
  editorialSections = [],
}: LightboxGalleryProps) {
  const galleryRef = useScrollReveal<HTMLElement>();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const items = useMemo(() => images.map((image, index) => ({
    image,
    caption: captions[index] ?? `View ${String(index + 1).padStart(2, "0")} / 空間視角`,
    categories: categories[index] ?? [],
    originalIndex: index,
  })), [categories, captions, images]);
  const displayedItems = useMemo(
    () => activeCategory === "all" ? items : items.filter((item) => item.categories.includes(activeCategory)),
    [activeCategory, items],
  );
  const activeItem = displayedItems[activeIndex] ?? displayedItems[0];
  const activeImage = activeItem?.image;
  const imageCount = displayedItems.length;

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!imageCount) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % imageCount);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + imageCount) % imageCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageCount, open]);

  useEffect(() => {
    setActiveIndex(0);
    setOpen(false);
  }, [activeCategory]);

  if (!images.length) return null;

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const move = (direction: 1 | -1) => {
    if (!imageCount) return;
    setActiveIndex((index) => (index + direction + imageCount) % imageCount);
  };

  return (
    <section ref={galleryRef} className={`lightbox-gallery-section reveal ${layout === "editorial" ? "lightbox-gallery-editorial" : ""}`} aria-label={`${altPrefix} 圖片故事`}>
      {layout === "default" && (
        <div className="magazine-gallery-head">
          <div className="magazine-gallery-index">
            <span className="section-label">{galleryLabel}</span>
            <span className="magazine-gallery-count">{String(images.length).padStart(2, "0")}</span>
          </div>
          <div className="magazine-gallery-copy">
            <h2>{galleryTitle}</h2>
            <p>{galleryIntro}</p>
          </div>
        </div>
      )}

      {filterable && categories.length > 0 && (
        <div className="gallery-filter-bar" role="toolbar" aria-label={`${altPrefix} 圖片分類篩選`}>
          <span className="gallery-filter-label">Filter by</span>
          <div className="gallery-filter-options">
            <button type="button" className={`gallery-filter-button ${activeCategory === "all" ? "is-active" : ""}`} aria-pressed={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
              <Maximize2 size={13} aria-hidden="true" /> 全部 <span>{images.length}</span>
            </button>
            {categoryOptions.map((option) => {
              const count = items.filter((item) => item.categories.includes(option.id)).length;
              const CategoryIcon = option.icon;
              return (
                <button key={option.id} type="button" data-category={option.id} className={`gallery-filter-button ${activeCategory === option.id ? "is-active" : ""}`} aria-pressed={activeCategory === option.id} onClick={() => setActiveCategory(option.id)}>
                  <CategoryIcon size={14} strokeWidth={1.6} aria-hidden="true" /> {option.label} <span>{count}</span>
                </button>
              );
            })}
          </div>
          <button type="button" className={`gallery-filter-reset ${activeCategory === "all" ? "is-current" : ""}`} aria-label="清除篩選並顯示全部圖片" onClick={() => setActiveCategory("all")} disabled={activeCategory === "all"}>
            <RotateCcw size={13} aria-hidden="true" /> 全部顯示
          </button>
          <span className="gallery-filter-result">{imageCount} images</span>
        </div>
      )}

      <div className={`lightbox-gallery magazine-count-${Math.min(imageCount, 6)} ${activeCategory !== "all" ? "is-filtered" : ""}`}>
        {displayedItems.map((item, index) => {
          const alt = `${altPrefix} 高解析案例圖片 ${item.originalIndex + 1}`;
          const section = editorialSections.find((entry) => entry.index === item.originalIndex);
          return (
            <Fragment key={item.image}>
              {section && <div className="magazine-section-break" data-section-index={section.index}><span>{section.label}</span></div>}
              <figure className={`magazine-frame magazine-frame-${Math.min(index + 1, 6)}`} data-gallery-index={item.originalIndex}>

              <button
                className="lightbox-trigger"
                type="button"
                aria-label={`放大查看：${alt}`}
                onClick={() => openAt(index)}
              >
                <img src={item.image} alt={alt} width={1600} height={1000} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <span className="lightbox-trigger-label"><Maximize2 size={13} /> View full image</span>
              </button>
              <figcaption className="magazine-caption">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.caption}</span>
              </figcaption>
              </figure>
            </Fragment>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="lightbox-content">
          <div className="lightbox-stage">
            <img className="lightbox-image" src={activeImage} alt={`${altPrefix} 高解析案例圖片 ${(activeItem?.originalIndex ?? 0) + 1}`} />
          </div>
          <div className="lightbox-toolbar">
            <DialogTitle className="lightbox-title">{altPrefix}</DialogTitle>
            <div className="lightbox-controls" aria-label="圖片切換控制">
              <button type="button" className="lightbox-arrow" aria-label="上一張圖片" onClick={() => move(-1)} disabled={imageCount < 2}>
                <ChevronLeft size={18} />
              </button>
              <span className="lightbox-count">{String(activeIndex + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}</span>
              <button type="button" className="lightbox-arrow" aria-label="下一張圖片" onClick={() => move(1)} disabled={imageCount < 2}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="lightbox-caption">
            <span className="lightbox-caption-label">Design detail / {String((activeItem?.originalIndex ?? 0) + 1).padStart(2, "0")}</span>
            <p>{activeItem?.caption ?? "空間視角"}</p>
          </div>
          <DialogDescription className="lightbox-description">使用左右方向鍵切換圖片，按 Esc 關閉放大檢視。</DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
