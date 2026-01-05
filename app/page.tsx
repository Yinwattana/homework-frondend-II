import { PostCard } from "@/components/cards/PostCard";
import PostCardList from "@/components/cards/PostCardList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
        <PostCardList />
      </section>
    </main>
  );
}
