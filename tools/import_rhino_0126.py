from pathlib import Path
from PIL import Image, ImageOps


SOURCE = Path('/home/ubuntu/upload/0126.png')
DEST = Path('/home/ubuntu/coco-design-clone/client/public/assets/picture1-rhino-07.webp')
MAX_WIDTH = 1800


def main():
    with Image.open(SOURCE) as image:
        image = ImageOps.exif_transpose(image).convert('RGB')
        if image.width > MAX_WIDTH:
            height = round(image.height * MAX_WIDTH / image.width)
            image = image.resize((MAX_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(DEST, 'WEBP', quality=86, method=6)
        print(f'{DEST.name}\t{DEST.stat().st_size}\t{image.width}x{image.height}')


if __name__ == '__main__':
    main()
