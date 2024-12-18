import React from "react";
interface ButtonProps {
  text: string;
  isOutLine?: boolean;
  className?: string;
}

const Button = ({ text, className, isOutLine }: ButtonProps) => {
  return (
    <button
      className={`${className} ${
        isOutLine ? " border border-lime-50 ml-6 " : "bg-[#FCD980] text-black"
      } px-6 py-2 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
