import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");

  return {
    fileName,
    content: fileContents,
  };
}

export function getAllPosts() {
  const fileNames = getPostFiles();
  return fileNames.map((fileName) => getPostData(fileName));
}
