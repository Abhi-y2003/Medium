import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Backend_url } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent]= useState("");
    const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="max-w-screen-xl mx-auto pt-12">
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Title
        </label>
        <textarea
          rows={1}
          className="block p-2.5 w-full text-xl mb-3 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your title"
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        ></textarea>
        <label className="block mb-2 text-xl font-medium text-gray-900">
          Your Story..
        </label>
        <textarea
          rows={15}
          className="h-80vh p-4 px-5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here...."
          onChange={(e)=>{
            setContent(e.target.value);
          }}
        ></textarea>

        <button
        onClick={async ()=>{
            const response = await axios.post(`${Backend_url}/api/v1/blog`,{
                title,
                content
            },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.id}`)
        }}
          type="submit"
          className="inline-flex items-center my-10 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
        >
          Publish post
        </button>
      </div>
    </div>
  );
};
