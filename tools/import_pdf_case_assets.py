from pathlib import Path
from PIL import Image, ImageOps


SOURCE = Path('/home/ubuntu/coco-pdf-images')
DEST = Path('/home/ubuntu/coco-design-clone/client/public/assets')
MAX_WIDTH = 2400
QUALITY = 84

SELECTED = {
    'picture1-qipao-01.webp': 'page-022.jpg',
    'picture1-qipao-02.webp': 'page-024.jpg',
    'picture1-qipao-03.webp': 'page-025.jpg',
    'picture1-qipao-04.webp': 'page-026.jpg',
    'picture1-qipao-05.webp': 'page-027.jpg',
    'picture1-qipao-06.webp': 'page-029.jpg',
    'picture1-rhino-01.webp': 'page-053.png',
    'picture1-rhino-02.webp': 'page-054.png',
    'picture1-rhino-03.webp': 'page-055.png',
    'picture1-rhino-04.webp': 'page-056.png',
    'picture1-rhino-05.webp': 'page-058.png',
    'picture1-rhino-06.webp': 'page-059.png',
    'picture1-yushan-01.webp': 'page-060.jpg',
    'picture1-yushan-02.webp': 'page-061.jpg',
}


def convert(source: Path, target: Path):
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=QUALITY, method=6)
        return image.size


def main():
    DEST.mkdir(parents=True, exist_ok=True)
    for target_name, source_name in SELECTED.items():
        source = SOURCE / source_name
        if not source.exists():
            raise FileNotFoundError(source)
        target = DEST / target_name
        size = convert(source, target)
        print(f'{target_name}\t{target.stat().st_size}\t{size[0]}x{size[1]}')
    print(f'imported {len(SELECTED)} PDF-derived case assets')


if __name__ == '__main__':
    main()
