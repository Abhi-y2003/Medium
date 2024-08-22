import { FullBLog } from "../components/FullBlog"
import { useBlog } from "./hooks"
import { useParams } from "react-router-dom"

export const Blog = () => {
  const  {id}= useParams();
  const {blog, loading} = useBlog({id: id || ""})
  if(loading){
    return <div>
      loading....
    </div>
  }
  return (
    <div>
      {/* @ts-ignore */}
      <FullBLog blog={blog}/>
    </div>
  )
}
