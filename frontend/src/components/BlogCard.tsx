import { Link } from "react-router-dom";


interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number,
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (<Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 pt-4 mb-5  max-w-screen-md w-screen cursor-pointer">
      <div className="flex items-center">
        <div className="flex item-center">
        <Avatar name={authorName}/> 
        </div>
       
       <div className="font-extralight pl-2 text-sm">{authorName}</div>
       <div className="flex justify-center flex-col pl-2">
        <Circle/>
       </div>
       <div className="pl-2 font-thin text-slate-500 text-sm">{publishedDate}</div>
      </div>
      
      <div className="text-xl font-semibold py-2">
        {title}
        </div>
      <div className="font-thin text-md py-1">
        {content.slice(0, 100) + "...."}
        </div>
      <div className="text-slate-500 text-sm font-thin">
        {`${Math.ceil(content.length / 100)} min read`}
        </div>
    </div>
    </Link>

  );
};

function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}
function Avatar({name , size = "small"}:{name:string, size?:"small" | "big"}) {
  return (
    <div className="pl">
      <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size ==="small"? "w-6 h-7":"w-10 h-10"}` }>
        <span className={`${size ==="small"? "text-sm":"text-2xl"} text-gray-600 dark:text-gray-300 font-medium`}>{name[0]}</span>
      </div>
    </div>
  );
}

export default Avatar;
