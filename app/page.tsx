import { getSortedPosts } from "@/data/posts";
import { PostCard } from "@/components/post-card";

export default function Home() {
  const posts = getSortedPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
          我的博客
        </h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
          记录技术、生活与思考
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
