from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont


SOURCE = Path('/home/ubuntu/coco-pdf-images')
OUTPUT = Path('/home/ubuntu/coco-pdf-images/contact-sheets')
THUMB_W = 280
THUMB_H = 200
LABEL_H = 32
COLS = 4
ROWS = 4
MARGIN = 18
BG = '#f3f0e9'
CARD = '#ffffff'
INK = '#161614'


def font(size):
    path = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
    return ImageFont.truetype(path, size) if Path(path).exists() else ImageFont.load_default()


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    files = sorted(p for p in SOURCE.iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png'})
    batch = COLS * ROWS
    for start in range(0, len(files), batch):
        group = files[start:start + batch]
        width = MARGIN + COLS * (THUMB_W + MARGIN)
        height = MARGIN + ROWS * (THUMB_H + LABEL_H + MARGIN)
        sheet = Image.new('RGB', (width, height), BG)
        draw = ImageDraw.Draw(sheet)
        for position, path in enumerate(group):
            row, col = divmod(position, COLS)
            x = MARGIN + col * (THUMB_W + MARGIN)
            y = MARGIN + row * (THUMB_H + LABEL_H + MARGIN)
            with Image.open(path) as source:
                image = ImageOps.exif_transpose(source).convert('RGB')
                thumb = ImageOps.contain(image, (THUMB_W - 12, THUMB_H - 12))
                card = Image.new('RGB', (THUMB_W, THUMB_H), CARD)
                card.paste(thumb, ((THUMB_W - thumb.width) // 2, (THUMB_H - thumb.height) // 2))
                sheet.paste(card, (x, y))
            draw.text((x, y + THUMB_H + 7), path.stem, fill=INK, font=font(13))
        sheet.save(OUTPUT / f'contact-sheet-{start // batch + 1:02d}.jpg', quality=88, optimize=True)
    print(f'created {((len(files) + batch - 1) // batch)} sheets for {len(files)} images')


if __name__ == '__main__':
    main()
