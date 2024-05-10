import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>francisco</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <Component />
        </div>
      </body>
    </html>
  );
}
