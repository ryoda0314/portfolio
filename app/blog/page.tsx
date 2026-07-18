import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Blog — ${profile.nameRomaji}`,
  description: "つくったもの、考えたことの記録。",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="page container">
      <p className="section-label">Blog</p>
      <h1 className="section-title">書いたもの</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`} className="post-row">
              <div className="post-row-main">
                <h2
                  className="post-row-title"
                  style={{ viewTransitionName: `post-${post.slug}` }}
                >
                  {post.title}
                </h2>
                <p className="post-row-excerpt">{post.excerpt}</p>
              </div>
              <div className="post-row-meta">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readingMinutes} min read</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
