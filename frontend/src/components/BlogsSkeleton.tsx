export const BlogsSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div>
        <div className="border-b border-slate-200 pb-4 pt-4 mb-5  max-w-screen-md w-screen cursor-pointer">
          <div className="flex items-center">
            <div className="flex item-center gap-2">
              <div className="h-2.5 bg-gray-200 rounded-full w-5 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
              <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div>
            </div>

            <div className="font-extralight pl-2 text-sm">
              <div className="h-2 bg-gray-200 rounded-full w-[100%] mb-2.5"></div>
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm">
              <div className="h-2 bg-gray-200 rounded-full w-[100%]  mb-2.5"></div>
            </div>
          </div>

          <div className="text-xl font-semibold py-2">
            <div className="h-2 bg-gray-200 rounded-full   w-[95%]  mb-2.5"></div>
          </div>
          <div className="font-thin text-md py-1">
            <div className="h-2 bg-gray-200 rounded-full  w-[95%]  mb-2.5"></div>
          </div>
          <div className="text-slate-500 text-sm font-thin py-1">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[90%] mb-2.5"></div>
          </div>
          <div className="text-slate-500 text-sm font-thin py-2">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[92%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
