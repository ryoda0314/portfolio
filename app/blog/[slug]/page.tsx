import type { Metadata } from "next";
import { getAllPosts, getPost } from "@/lib/posts";
import { AiToolbar } from "@/components/blog/AiToolbar";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <article className="page container article">
        <a href="/blog" className="back-link">
          ← Blog
        </a>
        <h1
          className="article-title"
          style={{ viewTransitionName: `post-${post.slug}` }}
        >
          {post.title}
        </h1>
        <div className="article-meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readingMinutes} min read</span>
          <span>·</span>
          <span>{post.tags.join(" / ")}</span>
        </div>
        <AiToolbar title={post.title} text={post.plainText} />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  );
}
