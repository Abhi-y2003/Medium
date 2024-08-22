import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "./hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Unknown user"}
              title={blog.title}
              content={blog.content}
              publishedDate={"2 Dec 2035"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
