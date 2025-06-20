import React from 'react'

const Button = ({
  text = "Start a blog",
  bgColor = "bg-white",
  textColor = "text-black",
  link = "#"
}) => {
  return (
    <div className="h-3/4 bg-transparent p-4 inline-block">
      <a href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <button className={`${bgColor} ${textColor} font-bold p-3 rounded cursor-pointer`}>{text}</button>
      </a>
    </div>
  )
}

export default Button