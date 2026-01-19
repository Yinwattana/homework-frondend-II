import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col space-y-3">
                <Skeleton className="aspect-5/2 w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-50" />
                </div>
            </div>
        
        </div>
    )
}
