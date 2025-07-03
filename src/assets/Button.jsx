import React from "react";

const Button = ({
  text = "Start a blog",
  bgColor = 'bg-blue-700',
  textColor = 'text-white',
  className = '',
  onClick = () => {},
  ...props
}) => {
  return (
    <div className="h-3/4 bg-transparent p-4 inline-block">
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200 ${bgColor} ${textColor} hover:bg-blue-800 hover:shadow-lg ${className}`}
        {...props}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
