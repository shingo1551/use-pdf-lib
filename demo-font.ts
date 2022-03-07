import { PDFDocument } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';
import fontkit from 'https://cdn.skypack.dev/@pdf-lib/fontkit@^1.0.0?dts';
import { readAll } from 'https://deno.land/std/io/util.ts';

const file = await Deno.open('./NotoSansJP-Regular.otf');
const fontBytes = await readAll(file);

export async function demoFont(pdfDoc: PDFDocument) {
  pdfDoc.registerFontkit(fontkit);
  return await pdfDoc.embedFont(fontBytes);
}
