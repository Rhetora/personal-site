import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";

export interface PostData {
  fileName: string;
  title: string;
  category: string;
  subtitle: string;
  intro: string;
  cover_url: string;
  content: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export async function getPostData(fileName: string): Promise<PostData> {
  try {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");

    // Remove ".md" from file name to get file name
    const fileId = fileName.replace(/\.md$/, "");

    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<string> = matter(fileContents);

    const post_data: PostData = {
      fileName: fileId,
      title: matterResult.data.title,
      category: matterResult.data.category,
      subtitle: matterResult.data.subtitle,
      intro: matterResult.data.intro,
      cover_url: matterResult.data.cover_url,
      content: matterResult.content,
      date: matterResult.data.date,
    };

    return post_data;
  } catch (error) {
    throw new Error(
      `Failed to read post data for file: ${fileName}`
    );
  }
}

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames: string[] = getPostFiles();
  const allPostsData = await Promise.all(
    fileNames.map((name) => getPostData(name))
  );

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
