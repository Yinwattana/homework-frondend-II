"use client"

import { PostResponse } from "@/app/lib/posts"
import { Link } from "lucide-react";
import { PostCard } from "./PostCard";
import { use } from "react";

export default function PostCardClientList({loadPost}){
    const posts:PostResponse[] = use(loadPost)
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