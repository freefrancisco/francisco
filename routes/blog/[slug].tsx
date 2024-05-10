import { PageProps, Handlers } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, KATEX_CSS,  render } from "@deno/gfm";
import { Head } from "$fresh/runtime.ts";

// languages from here https://unpkg.com/browse/prismjs@1.29.0/components/
import "npm:prismjs@1.29.0/components/prism-typescript.min.js"
import "npm:prismjs@1.29.0/components/prism-haskell.min.js"
import "npm:prismjs@1.29.0/components/prism-julia.min.js"
import "npm:prismjs@1.29.0/components/prism-python.min.js"

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};


export function PostPageOld(props: PageProps<Post>) {
  const post = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
      <div class="mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
    </main>
  )
}


export default function PostPage(props: PageProps<Post>) {
    const post = props.data;
    return (
      <>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: CSS }} />
          <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
        </Head>

        <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">{post.title}</h1>
      <time class="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
    </main>

        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content , {allowMath: true} ) }}
        />
      </>
    );
  }