import { PDFDocument } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

import { demoFont } from './demo-font.ts'
import { demoSVG } from './demo-svg.ts';
import { demoText } from './demo-text.ts';
import { demoTiger } from './demo-tiger.ts';

export async function demoPdf(text = 'あいうえお') {
  const pdfDoc = await PDFDocument.create();
  const customFont = await demoFont(pdfDoc);

  const page = pdfDoc.addPage();
  // demoSVG(page);
  demoText(customFont, page, text);
  demoTiger(page);

  return await pdfDoc.save();
}
