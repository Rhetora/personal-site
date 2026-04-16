import { PostData, getPostData, getPostFiles } from "../../../lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-tomorrow.css";

const env = process.env.NODE_ENV === "development";
const blogHref = (env ? "" : "/personal-site") + "/blog";

export async function generateStaticParams() {
  // Get all post file names
  const fileNames = getPostFiles();

  // Map file names to the expected parameter structure
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
}

const WORDS_PER_MINUTE = 200;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function readingTimeMinutes(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

const markdownComponents = {
  code({
    className,
    children,
    ...props
  }: {
    className?: string;
    children?: React.ReactNode;
  }) {
    const match = /language-(\w+)/.exec(className || "");
    const lang = match?.[1];
    const source = String(children).replace(/\n$/, "");
    if (lang && Prism.languages[lang]) {
      const html = Prism.highlight(source, Prism.languages[lang], lang);
      return (
        <code
          className={`language-${lang}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

function BackToBlog() {
  return (
    <a
      href={blogHref}
      className="not-prose inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
    >
      <span aria-hidden className="mr-1">←</span> Back to all posts
    </a>
  );
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  try {
  const post: PostData = await getPostData(`${id}.md`);
  const minutes = readingTimeMinutes(post.content);

  return (
    <article className="w-full">
      <header className="relative">
        <img
          src={"." + post.cover_url}
          alt={post.title}
          className="object-cover w-full h-[calc(100vh-4rem)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm uppercase tracking-wider text-gray-300 mb-3">
              {post.category && <span>{post.category}</span>}
              {post.category && post.date && <span aria-hidden>·</span>}
              {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
              <span aria-hidden>·</span>
              <span>{minutes} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
            {post.subtitle && (
              <p className="mt-3 text-lg md:text-xl text-gray-200">{post.subtitle}</p>
            )}
          </div>
        </div>
      </header>
      <div className="prose prose-invert prose-lg max-w-3xl prose-img:rounded-lg py-10 mx-4 md:mx-auto">
        {post.intro && (
          <p className="text-lg italic text-gray-500">{post.intro}</p>
        )}
        <hr />
        <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {post.content}
        </Markdown>
        <hr />
        <div className="mt-6">
          <BackToBlog />
        </div>
      </div>
    </article>
  );}
  catch {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
        <div className="text-center max-w-md space-y-4">
          <h1 className="text-5xl font-bold">Post not found</h1>
          <p className="text-gray-500">
            The post you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <a href={blogHref} className="btn btn-primary">
            Back to all posts
          </a>
        </div>
      </div>
    );
  }
}
