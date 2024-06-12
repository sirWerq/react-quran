import { Skeleton } from "@/components/ui/skeleton";

const SkeletonHome = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {[...new Array(114)].map((_, index) => (
        <div
          className="flex border rounded-sm justify-between p-2 bg-white"
          key={index}
        >
          <div className="flex gap-3">
            <div className="flex justify-center items-center">
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <div className="flex justify-center flex-col flex-wrap">
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Skeleton className="h-4 w-[50px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonHome;
