import { getPostData, getPostFiles } from "../../../lib/posts";
import Markdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  // Get all post file names
  const fileNames = getPostFiles();

  // Map file names to the expected parameter structure
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostData(`${id}.md`);

  return (
    <article className="w-full">
      <figure>
        <img
          src={post.cover_url}
          alt={post.title}
          className="object-cover w-full h-[calc(100vh-4rem)]"
        />
      </figure>
      <div className=" prose-invert prose py-10 mx-2 md:mx-auto">
        <h1 className="text-5xl pt-5 font-bold text-center">{post.title}</h1>
        <p className="text-center text-gray-500">{post.subtitle}</p>

        <p className="text-center text-lg italic text-gray-500">{post.intro}</p>
        <hr />
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
