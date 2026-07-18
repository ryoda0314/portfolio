import { getAllPosts } from "@/lib/posts";
import { Reveal } from "./Reveal";

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <section className="section" id="blog">
      <div className="container">
        <Reveal>
          <p className="section-label">Blog</p>
          <h2 className="section-title">書いたもの</h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <a href={`/blog/${post.slug}`} className="post-row">
                  <div className="post-row-main">
                    <h3 className="post-row-title">{post.title}</h3>
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
          <a href="/blog" className="all-posts-link">
            すべての記事 →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
