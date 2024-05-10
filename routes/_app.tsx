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
      <body class="bg-[#86efac]">
        <nav class="bg-gray-800 text-white p-4">
          <div class="container mx-auto flex justify-center items-center w-full">
            <ul class="flex justify-center space-x-16">
              <li><a href="/" class="hover:text-gray-300">Home</a></li>
              <li><a href="/about" class="hover:text-gray-300">About</a></li>
              <li><a href="/blog" class="hover:text-gray-300">Blog</a></li>
              <li><a href="/resume" class="hover:text-gray-300"  target="_blank">Resume</a></li>
              <li><a href="https://www.linkedin.com/in/francisco/" class="hover:text-gray-300"  target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/freefrancisco" class="hover:text-gray-300"  target="_blank">Github</a></li>
            </ul>
          </div>
        </nav>        

        <div class="px-4 py-16 mx-auto bg-[#86efac] text-lg">
          <div class="mx-80 px-auto  bg-white">
            <Component />
          </div>
        </div>
      </body>
    </html>
  );
}
