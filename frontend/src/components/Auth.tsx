import { Link } from "react-router-dom";
import { SignupInput } from "@abhishek-y2003/medium-common";
import { useState } from "react";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center flex-1">
      <div className="flex flex-col justify-center items-center max-w-lg">
        <div className="text-3xl font-extrabold ">Create An Account</div>
        <div className="mt-2 text-slate-400">
          Already have an account?{" "}
          <Link className="underline" to={"/Signin"}>
            Login
          </Link>
        </div>
        <LabelledInput
          label="Name"
          placeholder="Abhishek singh..."
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />

        <LabelledInput
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
          label="Password"
          placeholder="password..."
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, onChange }: LabelledInputType) {
  return (
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        id="name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
