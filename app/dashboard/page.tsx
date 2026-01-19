import PostCardList from "@/components/cards/PostCardList";
import { loadPost } from "../lib/data/fetchPost";
import PostCardClientList from "@/components/cards/PostCardClientList";

export default function Dashboard(){
    return(
        <main>
            <section>
                <h2>សួស្តី​ Hello</h2>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <PostCardClientList loadPost={loadPost()}/>
            </section>
        </main>
    )
}