import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { demoPdf } from './demo-pdf.ts'

const html = `
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<form method="POST" action="/">
  <input type="text" name="text" placeholder="何か入力して下さい">
  <button type="submit">Submit</button>
</form>
</body>
`;

console.log('Listening on http://localhost:8000');

serve(async (req) => {
  switch (req.method) {
    case "GET": {
      return new Response(html, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }

    case "POST": {
      const body = await req.formData();
      const text = body.get("text")?.toString();
      return new Response(await demoPdf(text ? text : undefined), {
        headers: { 'content-type': 'application/pdf' },
      });
    }

    default:
      return new Response("Invalid method", { status: 405 });
  }
});
