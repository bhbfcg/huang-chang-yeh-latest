// COCO editorial system: a quiet, tactile image sequence with magazine-style pacing, captions, and focused viewing.
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type LightboxGalleryProps = {
  images: string[];
  altPrefix: string;
  galleryLabel?: string;
  galleryTitle?: string;
  galleryIntro?: string;
  captions?: string[];
};

export default function LightboxGallery({
  images,
  altPrefix,
  galleryLabel = "Image sequence",
  galleryTitle = "A closer reading of the space.",
  galleryIntro = "每一張影像都是一次觀看距離的調整，從整體比例到材料、光線與生活尺度，讓空間在不同視角中逐步展開。",
  captions = [],
}: LightboxGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, open]);

  if (!images.length) return null;

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const move = (direction: 1 | -1) => {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  };

  return (
    <section className="lightbox-gallery-section" aria-label={`${altPrefix} 圖片故事`}>
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

      <div className={`lightbox-gallery magazine-count-${Math.min(images.length, 6)}`}>
        {images.map((image, index) => {
          const alt = `${altPrefix} 高解析案例圖片 ${index + 1}`;
          const caption = captions[index] ?? `View ${String(index + 1).padStart(2, "0")} / 空間視角`;
          return (
            <figure className={`magazine-frame magazine-frame-${Math.min(index + 1, 6)}`} key={image}>
              <button
                className="lightbox-trigger"
                type="button"
                aria-label={`放大查看：${alt}`}
                onClick={() => openAt(index)}
              >
                <img src={image} alt={alt} width={1600} height={1000} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                <span className="lightbox-trigger-label"><Maximize2 size={13} /> View full image</span>
              </button>
              <figcaption className="magazine-caption">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{caption}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="lightbox-content">
          <div className="lightbox-stage">
            <img className="lightbox-image" src={activeImage} alt={`${altPrefix} 高解析案例圖片 ${activeIndex + 1}`} />
          </div>
          <div className="lightbox-toolbar">
            <DialogTitle className="lightbox-title">{altPrefix}</DialogTitle>
            <div className="lightbox-controls" aria-label="圖片切換控制">
              <button type="button" className="lightbox-arrow" aria-label="上一張圖片" onClick={() => move(-1)} disabled={images.length < 2}>
                <ChevronLeft size={18} />
              </button>
              <span className="lightbox-count">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              <button type="button" className="lightbox-arrow" aria-label="下一張圖片" onClick={() => move(1)} disabled={images.length < 2}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <DialogDescription className="lightbox-description">使用左右方向鍵切換圖片，按 Esc 關閉放大檢視。</DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
