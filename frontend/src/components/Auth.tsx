import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@abhishek-y2003/medium-common";
import { useState } from "react";
import axios from "axios";
import { Backend_url } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });


  async function sendRequest(){
    try{
      const response = await axios.post(`${Backend_url}/api/v1/user/${type === "signin"? "signin" : "signup"}`, postInputs);
      if (response.status === 200 && response.data && response.data.token) {
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate('/blogs');
    } else {
        throw new Error("Authentication failed");
    }
    }catch(e){
      alert(e)
    }
    
  }
  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center flex-1">
      <div className="flex flex-col justify-center items-center max-w-lg px-12">
        <div className="text-3xl font-extrabold ">Create An Account</div>
        <div className="mt-2 text-slate-400">
          {type === "signin"? "Don't have an account? " : "Already have an Account? "}
          <Link className="underline" to={type === "signin"? "/signup " : "/Signin"}>
          {type === "signin"? "signup " : "Login"}
          </Link>
        </div>
        <div className="w-full mx-28 pt-2">
        {type === "signup" && <LabelledInput
        id="name"
          label="Name"
          placeholder="Abhishek singh..."
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />}

        <LabelledInput
        id="email"
          label="Email"
          placeholder="abhishek@gmail.com"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              email: e.target.value,
            }));
          }}
        />

        <LabelledInput
          id="password"
          label="Password"
          placeholder="password..."
          type="password"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />
        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-8" >{type === "signin"?  "Sign in": "Sign up"}</button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  id: string,
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

function LabelledInput({id, label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-lg text-slate-900 pt-4 pb-2 font-semibold ">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        id={id}
        className="bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2" 
        placeholder={placeholder}
        required
      />
    </div>
  );
}
