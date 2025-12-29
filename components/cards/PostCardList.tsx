import { loadPost } from "@/app/lib/data/fetchPost";
import { PostResponse } from "@/app/lib/posts";
import { PostCard } from "./PostCard";
import { title } from "process";
import Link from "next/link";

export default async function PostCardList() {
  const posts: PostResponse[] = await loadPost();
  return posts.map((post) => (
    <Link href={`/blog/${post.id}`} key={post.id}>
      <PostCard
        key={post.id}
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    </Link>
  ));
}
