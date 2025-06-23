import React from "react";

const Button = ({
  text = "Start a blog",
  bgColor = "bg-white",
  textColor = "text-black",
  onClick = () => {},
}) => {
  return (
    <div className="h-3/4 bg-transparent p-4 inline-block">
      <button
        onClick={onClick}
        className={`${bgColor} ${textColor} font-bold p-3 rounded cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
