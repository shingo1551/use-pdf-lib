import { PDFDocument, rgb, } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';
import fontkit from 'https://cdn.skypack.dev/@pdf-lib/fontkit@^1.0.0?dts';

//
import { readAll } from "https://deno.land/std/io/util.ts";
const file = await Deno.open("./Koruri-Regular.ttf");
const fontBytes = await readAll(file);

//
const pdfDoc = await PDFDocument.create();

pdfDoc.registerFontkit(fontkit);
const customFont = await pdfDoc.embedFont(fontBytes);

const page = pdfDoc.addPage();

// SVG path for a wavy line
const svgPath = 'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'

page.moveTo(100, page.getHeight() - 5)

// Draw the SVG path as a black line
page.moveDown(25)
page.drawSvgPath(svgPath)

// Draw the SVG path as a thick green line
page.moveDown(200)
page.drawSvgPath(svgPath, { borderColor: rgb(0, 1, 0), borderWidth: 5 })

// Draw the SVG path and fill it with red
page.moveDown(200)
page.drawSvgPath(svgPath, { color: rgb(1, 0, 0) })

// Draw the SVG path at 50% of its original size
page.moveDown(200)
page.drawSvgPath(svgPath, { scale: 0.5 })

//
const text = 'あいうえお This is text in an embedded font!';
const textSize = 35;
const textWidth = customFont.widthOfTextAtSize(text, textSize);
const textHeight = customFont.heightAtSize(textSize);

page.drawText(text, {
  x: 40,
  y: 450,
  size: textSize,
  font: customFont,
  color: rgb(0, 0.53, 0.71),
});
page.drawRectangle({
  x: 40,
  y: 450,
  width: textWidth,
  height: textHeight,
  borderColor: rgb(1, 0, 0),
  borderWidth: 1.5,
});

//
const pdfBytes = await pdfDoc.save();
await Deno.writeFile('out.pdf', pdfBytes);

// deno run --allow-read --allow-write --allow-net custom-font.ts
