import Link from "next/link";
import { getAllPosts } from "../../lib/cms";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <div>
            <h1>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}