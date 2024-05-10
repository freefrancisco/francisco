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
        <h1 class="text-4xl font-bold">Welcome to Francisco's Site</h1>
        <ul>
          <li>
          <a href="/resume">My Resume</a>
          </li>
          <li>
            <a href="/blog">My Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
