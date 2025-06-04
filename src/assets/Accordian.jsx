import React, { useState } from "react"

const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
  {
    question: "What is an Accordion?",
    answer: "An accordion is a UI component that allows toggling visibility of content sections.",
  },
];

const Accordian = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
                <button className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-400 transition cursor-pointer" onClick={() => toggle(index)}>
                    <span className="font-medium text-lg">{item.question}</span>
                    <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                    </span>
                </button>
                {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
                )}
            </div>
            ))}
        </div>
    )
}

export default Accordian