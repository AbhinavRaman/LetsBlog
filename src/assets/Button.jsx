import React from 'react'

const Button = ({
  bgColor = "bg-white",
  textColor = "text-black"
}) => {
  return (
    <div className="h-3/4 bg-transparent p-4 inline-block">
        <button className={`${bgColor} ${textColor} font-bold p-3 rounded cursor-pointer`}>Start a blog</button>
    </div>
  )
}

export default Button