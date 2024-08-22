import Avatar from "./BlogCard"

export const Appbar=()=>{
    return <div className="border-b border-slate-400 px-10 flex justify-between py-3 items-center">
        <h1 className="text-3xl">
            Medium
        </h1>
        <div>
            <Avatar size="big" name="Abhishek"/>
        </div>

    </div>
}