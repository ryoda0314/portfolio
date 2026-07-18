import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// content/posts/*.md にフロントマター付きMarkdownを置くと記事になります。
// 必須フロントマター: title, date (YYYY-MM-DD), excerpt / 任意: tags

const postsDir = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  html: string;
  plainText: string;
};

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDir, fileName), "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  const plainText = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    readingMinutes: Math.max(1, Math.round(plainText.length / 500)),
    html,
    plainText,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { html, plainText, ...meta } = parseFile(f);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post {
  return parseFile(`${slug}.md`);
}
