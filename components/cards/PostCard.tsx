import { PostResponse } from "@/app/lib/posts";
import { Button } from "../ui/button";
import { CircleFadingArrowUpIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export async function PostCard({ 
    userId = 0, 
    id = 0, 
    title = "សួស្តី Class", 
    body = "Default CardDescription"
}: PostResponse) {

  return (
    <>
      <Card
  className="
    w-full max-w-sm
    rounded-xl
    border border-slate-200
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:shadow-lg
    hover:-translate-y-1
    hover:border-blue-400
  "
>
  <CardHeader className="space-y-2">
    <CardTitle className="text-lg font-semibold text-slate-800">
      Login to your account
    </CardTitle>

    <CardDescription className="text-slate-600">
      {title}
    </CardDescription>

    <CardDescription className="text-slate-500 line-clamp-3">
      {body}
    </CardDescription>

    <CardDescription className="text-sm text-blue-600 font-medium">
      {id} | {userId}
    </CardDescription>
  </CardHeader>
</Card>

    </>
  );
}
