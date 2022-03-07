import { demoPdf } from './demo-pdf.ts'

await Deno.writeFile('out.pdf', await demoPdf());

// deno run --allow-read --allow-write --allow-net deno-pdf.ts
