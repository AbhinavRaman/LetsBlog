import React, { useState } from "react";

const Accordion = ({
  items = [],              // Array of { question, answer }
  borderColor = "border-gray-300",
  hoverBg = "hover:bg-gray-100",
  questionClass = "font-medium text-lg",
  answerClass = "px-6 pb-4 text-gray-700",
  containerClass = "max-w-xl mx-auto mt-10",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={containerClass}>
      {items.map((item, idx) => (
        <div key={idx} className={`border-b ${borderColor}`}>
          <button
            className={`w-full text-left py-4 px-6 flex justify-between items-center transition cursor-pointer ${hoverBg}`}
            onClick={() => toggle(idx)}
          >
            <span className={questionClass}>{item.question}</span>
            <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
          </button>

          {openIndex === idx && (
            <div className={answerClass}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
