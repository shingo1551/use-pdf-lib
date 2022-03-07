import { PDFPage, rgb } from 'https://cdn.skypack.dev/pdf-lib@^1.11.1?dts';

export function demoSVG(page: PDFPage) {
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
}
