import { PostCard } from "@/components/cards/PostCard";
import PostCardList from "@/components/cards/PostCardList";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import SkeletonCard from "@/components/cards/SkeletonCard";
import LoginForm from "@/components/cards/login-form";
import RegisterForm from "@/components/cards/register-form";
import { Product_form } from "@/components/forms/product-form";

export default function Home() {
  return (
    <main>
      
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
        <PostCardList />
      </section> */}
      {/* <SkeletonCard /> */}

      <div className="flex justify-center">
        {/* <LoginForm/> */}
        {/* <RegisterForm/> */}
       
        <Product_form/>
      </div>
      
    </main>
  );
}
