import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderCart = () => {
  return (
    <Link
      href={"/gio-hang"}
      className="relative group cursor-pointer inline-flex items-center max-lg:ps-[1.5rem] p-3 text-sm font-medium text-center text-white rounded-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#f9cb4b"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 hover:opacity-80"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-second border-2 border-white rounded-full -top-2 -end-2">
        0
      </div>

      {/* Giỏ hàng hiển thị khi hover */}
      <div className="absolute max-lg:hidden top-12 right-0 border-b-2 border-amber-400 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity min-w-max pointer-events-none">
        <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>
        <div className="flex text-start items-center gap-3 border-b pb-2">
          <Image
            width={200}
            height={100}
            src="/images/banh-trung-thu-buu-yen-5.jpg"
            alt="Sản phẩm"
            className="w-10 h-10 rounded"
          />
          <div className="text-gray-700">
            <p className="text-sm font-semibold ">Sản phẩm</p>
            <p className="text-xs text-gray-500">$10.00</p>
          </div>
        </div>

        <div className="flex text-start items-center gap-3 border-b py-2">
          <Image
            width={200}
            height={100}
            src="/images/banh-trung-thu-buu-yen-5.jpg"
            alt="Sản phẩm"
            className="w-10 h-10 rounded"
          />
          <div className="text-gray-700">
            <p className="text-sm font-semibold">Sản phẩm B</p>
            <p className="text-xs text-gray-500">$15.00</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeaderCart;
