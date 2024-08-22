import { Blog } from "../pages/hooks"
import { Appbar } from "./Appbar"


export const FullBLog=({ blog }:{blog: Blog})=>{
    return <div>

        <Appbar/>

        <div className="grid grid-cols-3 px-10 pt-16 max-w-screen-2xl mx-auto">

        <div className="col-span-2 ">
            <div className="text-4xl font-extrabold">
                {blog.title}

            </div>
            <div className="text-slate-500 pt-2">
                published on 2 dec 2024
            </div>
            <div className="pt-4">
            {blog.content}
            </div>
        </div>
        <div className="col-span-1">
            {blog.author.name || "Anonymus"}
        </div>

    </div>

    </div>
    
}