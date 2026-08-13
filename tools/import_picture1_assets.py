from pathlib import Path
from PIL import Image, ImageOps


SOURCE = Path('/home/ubuntu/coco-incoming/圖片1')
DEST = Path('/home/ubuntu/coco-design-clone/client/public/assets')
MAX_WIDTH = 1800
QUALITY = 84

SELECTED = {
    'picture1-teahouse-01.webp': 'Enscape_2024-03-20-03-28-06.png',
    'picture1-teahouse-02.webp': 'Enscape_2024-03-20-11-34-35.png',
    'picture1-teahouse-03.webp': 'Enscape_2024-03-20-11-40-44.png',
    'picture1-teahouse-04.webp': 'Enscape_2024-03-23-18-21-38.png',
    'picture1-teahouse-05.webp': 'Enscape_2024-04-23-13-43-46.png',
    'picture1-temple-01.webp': 'Enscape_2024-09-10-15-38-19.png',
    'picture1-temple-02.webp': 'Enscape_2024-09-14-18-10-41.png',
    'picture1-temple-03.webp': 'Enscape_2024-09-18-15-28-11.png',
    'picture1-yongji18-01.webp': 'Enscape_2024-09-26-15-20-12.jpg',
    'picture1-yongji18-02.webp': 'Enscape_2024-09-06-16-14-30.jpg',
    'picture1-yongji18-03.webp': 'Enscape_2024-10-18-17-15-12.jpg',
    'picture1-yongji13-01.webp': 'Enscape_2024-11-04-00-35-54.jpg',
    'picture1-yongji13-02.webp': 'Enscape_2024-11-04-00-52-55.jpg',
    'picture1-yongji13-03.webp': 'Enscape_2024-11-04-01-13-03.jpg',
    'picture1-yongji13-04.webp': 'Enscape_2025-06-09-12-13-08.png',
    'picture1-material-bath.webp': 'Enscape_2025-06-09-14-19-17.png',
}


def process(source: Path, target: Path) -> int:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=QUALITY, method=6)
        return image.width * image.height


def main():
    DEST.mkdir(parents=True, exist_ok=True)
    for target_name, source_name in SELECTED.items():
        source = SOURCE / source_name
        target = DEST / target_name
        if not source.exists():
            raise FileNotFoundError(source)
        pixels = process(source, target)
        print(f'{target_name}\t{target.stat().st_size}\t{pixels}')
    print(f'imported {len(SELECTED)} optimized assets')


if __name__ == '__main__':
    main()
