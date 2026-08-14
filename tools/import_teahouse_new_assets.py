from pathlib import Path

from PIL import Image


SOURCE_DIR = Path("/home/ubuntu/coco-incoming/圖片1")
TARGET_DIR = Path("/home/ubuntu/coco-design-clone/client/public/assets")

SOURCES = [
    ("Enscape_2024-03-17-21-19-51.png", "picture1-teahouse-06.webp"),
    ("Enscape_2024-03-17-21-21-03.png", "picture1-teahouse-07.webp"),
    ("Enscape_2024-03-17-21-22-20.png", "picture1-teahouse-08.webp"),
]


def main() -> None:
    TARGET_DIR.mkdir(parents=True, exist_ok=True)
    for source_name, target_name in SOURCES:
        source = SOURCE_DIR / source_name
        target = TARGET_DIR / target_name
        with Image.open(source) as image:
            image = image.convert("RGB")
            image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", quality=84, method=6)
            print(f"{target.name}: {image.width}x{image.height}, {target.stat().st_size} bytes")


if __name__ == "__main__":
    main()
