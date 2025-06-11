import { useState } from 'react';

const Dropdown = ({
  options = [],
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Trigger */}
      <div className="bg-[#151414] text-white p-2 rounded cursor-pointer">
        {placeholder}
      </div>

      {/* Dropdown Items */}
      {isHovered && (
        <div className="absolute left-0 mt-1 w-52 bg-[#1e1e1e] border border-gray-700 rounded shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-white hover:bg-[#333] cursor-pointer"
              onClick={() => console.log(`Selected: ${option.value || option.label}`)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
