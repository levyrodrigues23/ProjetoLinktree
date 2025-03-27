import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input className="border-0 h-9  rounded-md outline-none px-2 mb-3 bg-white" 
    {...props}/>

  );
};

export default Input;
