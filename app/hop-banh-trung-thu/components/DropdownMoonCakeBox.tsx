"use client";

import { useState } from "react";

const DropdownMoonCakeBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary hover:bg-primary min-w-full border border-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center justify-between"
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
        <div className="absolute container left-0 right-0 mt-2 z-10    w-full">
          <ul className="py-2 text-sm text-gray-700 bg-white divide-y border  border-gray-300 divide-gray-100 rounded-lg shadow-sm">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Thứ tự theo mức độ phổ biến
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Thứ tự theo điểm đánh giá
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
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

export default DropdownMoonCakeBox;
