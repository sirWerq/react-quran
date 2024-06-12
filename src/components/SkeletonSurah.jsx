import { Skeleton } from "@/components/ui/skeleton";

const SkeletonSurah = () => {
  return (
    <div className="container">
      <div className="p-4">
        <div className="flex justify-center p-4">
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="flex items-center flex-col gap-4 p-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <Skeleton className="h-4 w-[250px]" />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-center p-5">
              <Skeleton className="h-4 w-[250px]" />
            </div>
            {[...new Array(10)].map((_, index) => (
              <div className="p-2 bg-white rounded-lg" key={index}>
                <div className="flex justify-end items-center gap-4 p-5">
                  <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="text-sm flex justify-start flex-col gap-2 p-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center gap-2 p-2">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSurah;
