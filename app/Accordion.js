// In file Accordian.js
"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold hover:bg-slate-700/50 px-2 rounded-md"
      >
        <span>{title}</span>
        <FiChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="py-4 px-2 text-gray-300">{children}</div>}
    </div>
  );
}
