import { Blog } from "../pages/hooks";
import { Appbar } from "./Appbar";
import Avatar from "./BlogCard";

export const FullBLog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />

      <div className="grid grid-cols-3 px-10 pt-16 max-w-screen-2xl mx-auto">
        <div className="col-span-2 mr-2 0 ">
          <div className="text-4xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 pt-2">published on 2 dec 2024</div>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-1">
          Author
          <div className="flex gap-3 mt-3">
            <div className="">
            <Avatar size="big" name={blog.author.name || "A"} />
            </div>
            <div className="mt-1">

              <div className="text-xl font-bold ">
                {blog.author.name || "Anonymus"}
              </div>
              <div className=" pt-2 text-sm font-thin text-slate-950">
                Random cathc phrase lorem12
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
