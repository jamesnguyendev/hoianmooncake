"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartShop = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
          <div className="space-y-4 md:flex flex-wrap md:items-center md:justify-between md:gap-6 md:space-y-0">
            <Link href="#" className="shrink-0 md:order-1">
              <Image
                src={"/images/banh-trung-thu-buu-yen-3.jpg"}
                alt={"title"}
                width={200}
                height={300}
                quality={100}
                className="transition-opacity w-full min-w-full md:w-[8rem] object-contain md:object-cover duration-300 hover:opacity-85"
              />
            </Link>

            <label htmlFor="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-3 md:justify-end mt-5">
              <div className="flex items-center justify-center p-2">
                <div className="flex items-center space-x-2 border border-gray-200 rounded-lg p-2 bg-white">
                  <button
                    onClick={() => setNumber((prev) => Math.max(prev - 1, 1))}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Decrease value"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>

                  <input
                    type="number"
                    className="w-12 h-8 text-center border border-gray-200 rounded text-gray-800 focus:outline-none focus:border-blue-400"
                    value={number}
                    defaultValue={number}
                    disabled
                  />

                  <button
                    onClick={() => setNumber((prev) => prev + 1)}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Increase value"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900  ">
                  {122.0 * number === 1 || number == 1 ? 122.0 : 122.0 * number}
                  đ
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1  space-y-4 md:order-2 md:max-w-md">
              <a
                href="#"
                className="  text-xl font-semibold text-primary hover:underline  "
              >
                BTT Yến Sào Hạt Sen – Đông Trùng Hạ Thảo (1 Trứng)
              </a>

              <div className="flex items-center gap-4 mt-2">
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center text-sm font-medium hover:underline  text-red-500"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartShop;
