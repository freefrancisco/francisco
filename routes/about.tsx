export default function About() {
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
          <h1 class="text-4xl font-bold">Francisco Gutierrez</h1>
          <p>
            I am a software engineer living in Miami Beach. 
            I work mostly with Haskell, Python, and Julia doing machine learning, 
            data science, and backend things, but I figured I'd play around with 
            front end frameworks and do a website.  
          </p>
          <p>
            In my free time I enjoy lifting weights, practicing capoeira on the yard, 
            trading options on stocks and futures, craft beer, wine, restaurants, 
            and long walks on the Miami Beach boardwalk. 
          </p>

          </div>
        </div>
       </div>
    );
  }
  