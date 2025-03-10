import React from "react";

const BreadcrumProduct = () => {
  return (
    <span className="flex items-center gap-1 text-sm container mt-3">
      Shop
      <svg
        className="rtl:rotate-180 w-3 h-3 text-second mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      Combo Bửu Yến
      <svg
        className="rtl:rotate-180 w-3 h-3 text-second mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>{" "}
      Combo Cung Đình N.2
    </span>
  );
};

export default BreadcrumProduct;
