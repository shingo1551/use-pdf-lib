import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { demoPdf } from './demo-pdf.ts'

console.log('Listening on http://localhost:8000');
serve(async (_req) => {
  return new Response(await demoPdf(), {
    headers: { 'content-type': 'application/pdf' },
  });
});

// deno run --allow-net=:8000  --allow-read --watch deploy-pdf.ts 
