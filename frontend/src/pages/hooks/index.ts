import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_url } from "../../config";

interface Blogs{
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string,
    }
}

export interface Blog{
    "id": number,
    "title": string,
    "content": string,
    "author": {
            "name":string,
        },
}


export const useBlog=({ id }: {id:string})=>{
    const [loading,setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
     axios.get(`${Backend_url}/api/v1/blog/${id}`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
     })
     .then(response=>{
        setBlog(response.data.blog);
        setLoading(false);
     })
    }, [])
    

    return {
        loading,
        blog
    }
}




export const useBlogs =()=>{
    const [loading,setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(() => {
     axios.get(`${Backend_url}/api/v1/blog/bulk`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
     })
     .then(response=>{
        setBlogs(response.data.blog);
        console.log(response.data.blog);
        setLoading(false);
     })
    }, [])
    

    return {
        loading,
        blogs
    }

}