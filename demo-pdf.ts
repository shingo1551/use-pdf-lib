import { PDFDocument } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

import { demoFont } from './demo-font.ts'
import { demoSVG } from './demo-svg.ts';
import { demoText } from './demo-text.ts';

export async function demoPdf() {
  const pdfDoc = await PDFDocument.create();
  const customFont = await demoFont(pdfDoc);

  const page = pdfDoc.addPage();
  demoSVG(page);
  demoText(customFont, page);

  return await pdfDoc.save();
}
