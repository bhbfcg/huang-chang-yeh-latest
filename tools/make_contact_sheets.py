from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont


SOURCE = Path('/home/ubuntu/coco-incoming/圖片1')
OUTPUT = Path('/home/ubuntu/coco-incoming/contact-sheets')
THUMB_W = 260
THUMB_H = 190
LABEL_H = 34
COLS = 4
ROWS = 5
MARGIN = 18
BG = '#f3f0e9'
CARD = '#ffffff'
INK = '#161614'


def load_font(size: int):
    candidates = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
        '/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf',
    ]
    for candidate in candidates:
        if Path(candidate).exists():
            return ImageFont.truetype(candidate, size)
    return ImageFont.load_default()


def make_sheet(files, index):
    width = MARGIN + COLS * (THUMB_W + MARGIN)
    height = MARGIN + ROWS * (THUMB_H + LABEL_H + MARGIN)
    sheet = Image.new('RGB', (width, height), BG)
    draw = ImageDraw.Draw(sheet)
    title_font = load_font(20)
    label_font = load_font(13)
    for position, path in enumerate(files):
        row, col = divmod(position, COLS)
        x = MARGIN + col * (THUMB_W + MARGIN)
        y = MARGIN + row * (THUMB_H + LABEL_H + MARGIN)
        try:
            with Image.open(path) as source:
                source = ImageOps.exif_transpose(source).convert('RGB')
                thumb = ImageOps.contain(source, (THUMB_W - 12, THUMB_H - 12))
                card = Image.new('RGB', (THUMB_W, THUMB_H), CARD)
                card.paste(thumb, ((THUMB_W - thumb.width) // 2, (THUMB_H - thumb.height) // 2))
                sheet.paste(card, (x, y))
        except Exception:
            draw.rectangle((x, y, x + THUMB_W, y + THUMB_H), fill='#ddd8cf')
            draw.text((x + 10, y + 10), 'UNREADABLE', fill=INK, font=label_font)
        label = path.stem
        if len(label) > 35:
            label = label[:32] + '...'
        draw.text((x, y + THUMB_H + 7), label, fill=INK, font=label_font)
    draw.text((MARGIN, height - 18), f'圖片1 / contact sheet {index:02d}', fill=INK, font=title_font)
    output = OUTPUT / f'contact-sheet-{index:02d}.jpg'
    sheet.save(output, quality=88, optimize=True)


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    files = sorted(p for p in SOURCE.iterdir() if p.suffix.lower() in {'.jpg', '.jpeg', '.png', '.webp'})
    batch_size = COLS * ROWS
    for start in range(0, len(files), batch_size):
        make_sheet(files[start:start + batch_size], start // batch_size + 1)
    print(f'created {((len(files) + batch_size - 1) // batch_size)} contact sheets for {len(files)} images')


if __name__ == '__main__':
    main()
