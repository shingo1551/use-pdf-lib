import { demoPdf } from './demo-pdf.ts'

await Deno.writeFile('out.pdf', await demoPdf());
