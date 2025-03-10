import ProductShowcase from "@/components/ProductShowcase";
import React from "react";
import DropdownShop from "./components/DropdownShop";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Shop | Hội An Mooncake",
    description: "Sản phẩm Hội An Mooncake | Thương hiệu bánh trung thu",
  };
};
const Page = () => {
  return (
    <div className="pt-28 ">
      <span className="flex items-center gap-1 text-sm container mt-3">
        Shop{" "}
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
        Sản phẩm
      </span>
      <div className="container flex items-center justify-between mt-4">
        <span className="line-clamp-1">Hiển thị tất cả 25 kết quả</span>
        <div className="">
          <DropdownShop />
        </div>
      </div>
      <ProductShowcase />
    </div>
  );
};

export default Page;
