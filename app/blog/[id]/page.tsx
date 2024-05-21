import { getPostFiles, getPostData } from "../../../lib/posts";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
// import remarkPrism from "remark-prism";

interface PostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const fileNames = getPostFiles();
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const post = getPostData(`${id}.md`);

  return (
    <article>
      <ReactMarkdown
        //children={post.content}
        remarkPlugins={[remarkHtml]}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
