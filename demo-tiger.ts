import { xml2js } from "https://deno.land/x/xml2js@1.0.0/mod.ts";
import { PDFPage, PDFPageDrawSVGOptions, rgb } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

const xml = await Deno.readTextFile('./Ghostscript_Tiger.svg');
const obj = xml2js(xml, {
  compact: true,
}) as any;

export function demoTiger(page: PDFPage) {
  page.moveTo(200, 500)

  const array = obj.svg.g.g
  for (const g of array) {
    const attr = g._attributes;
    const color = attr.fill;
    const borderColor = attr.stroke;
    const borderWidth = attr['stroke-width'];

    const option: PDFPageDrawSVGOptions = {}
    if (borderWidth) option.borderWidth = +borderWidth;
    if (color) option.color = _rgb(color);
    if (borderColor) option.borderColor = _rgb(borderColor);

    const path = g.path._attributes.d as string;

    page.drawSvgPath(path, option);
  }
}

function _rgb(hex: string) {
  if (hex.length === 4) {
    const r = _hex(hex.slice(1, 2));
    const g = _hex(hex.slice(2, 3));
    const b = _hex(hex.slice(3, 4));
    return rgb(r / 15, g / 15, b / 15);
  } else {
    const r = _hex(hex.slice(1, 3));
    const g = _hex(hex.slice(3, 5));
    const b = _hex(hex.slice(5, 7));
    return rgb(r / 255, g / 255, b / 255);
  }
}

function _hex(hex: string) {
  return parseInt('0x' + hex, 16);
}
