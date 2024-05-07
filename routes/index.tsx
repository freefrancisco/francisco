import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
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
        <h1 class="text-4xl font-bold">Welcome to Francisco's Fresh Site</h1>
        <p class="my-4">
          This is where I am going to put information about me and blog posts. 
        </p>
        Counter island for the hell of it
        <Counter count={count} />
        <div>
          <h3>
            <a href ="/posts"> Go See My Blog Posts Here </a>
        </h3>
      </div>

      </div>
    </div>
  );
}
