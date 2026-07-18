import { getAllPosts } from "@/lib/posts";
import { BlogTeaserClient } from "./BlogTeaserClient";

// 記事一覧の取得はサーバー側(fs)で行い、表示はクライアント側で言語切り替えする
export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;
  return <BlogTeaserClient posts={posts} />;
}
