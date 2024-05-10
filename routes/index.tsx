export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <div class="bg-white px-32 py-32">
        <h1 class="text-4xl font-bold">Welcome to Francisco's Site</h1>
        <p>
          I am playing around with <a href="https://deno.com/"> Deno </a>  
          and <a href="https://fresh.deno.dev/"> Deno Fresh </a> which are
          supposed to be the next generation of web development tools,   
          so I decided to try them out and use them to make a website for myself. 
        </p>
        </div>
      </div>
     </div>
  );
}
