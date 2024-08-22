import { Link } from "react-router-dom";
import Avatar from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b border-slate-400 px-10 flex justify-between py-3 items-center">
      <Link to={"/"} className="text-3xl cursor-pointer">
        Medium
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 ">
            New
          </button>
        </Link>
        <Avatar size="big" name="Abhishek" />
      </div>
    </div>
  );
};
