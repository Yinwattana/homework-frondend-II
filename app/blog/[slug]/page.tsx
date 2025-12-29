import { loadPostById } from "@/app/lib/data/fetchPost";
import { PostCard } from "@/components/cards/PostCard";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPostById(slug);
  console.log(post);
  return (
    <PostCard
      key={post.id}
      userId={post.userId}
      id={post.id}
      title={post.title}
      body={post.body}
    />
  );
}
