import { PDFFont, PDFPage, rgb } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

export function demoText(font: PDFFont, page: PDFPage, text: string) {
  const textSize = 35;
  const textWidth = font.widthOfTextAtSize(text, textSize);
  const textHeight = font.heightAtSize(textSize);

  page.drawText(text, {
    x: 40,
    y: 450,
    size: textSize,
    font: font,
    color: rgb(0, 0.53, 0.71),
  });

  page.drawRectangle({
    x: 40,
    y: 440,
    width: textWidth,
    height: textHeight,
    borderColor: rgb(1, 0, 0),
    borderWidth: 1.5,
  });
}
