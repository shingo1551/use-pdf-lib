import { PDFDocument } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';
import fontkit from 'https://cdn.skypack.dev/@pdf-lib/fontkit@^1.0.0?dts';

import { readAll } from 'https://deno.land/std/io/util.ts';

export async function demoFont(pdfDoc: PDFDocument) {
  pdfDoc.registerFontkit(fontkit);

  const file = await Deno.open('./Koruri-Regular.ttf');
  const fontBytes = await readAll(file);

  return await pdfDoc.embedFont(fontBytes);
}
