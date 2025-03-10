"use client";

import { useState } from "react";

const DropdownShop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary hover:bg-primary border-2 border-[#00246D] font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        Thứ tự mặc định
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 z-10 bg-white divide-y border-2 border-[#00246D] divide-gray-100 rounded-lg shadow-sm w-56">
          <ul className="py-2 text-sm text-gray-700 ">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Thứ tự theo mức độ phổ biến
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                Thứ tự theo điểm đánh giá
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                Mới nhất
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Thứ tự theo giá: thấp đến cao
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Thứ tự theo giá: cao xuống thấp
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownShop;
