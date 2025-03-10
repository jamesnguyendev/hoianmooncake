"use client";

import Image from "next/image";
import { useState } from "react";

const CartShop = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a href="#" className="shrink-0 md:order-1">
              <Image
                src={"/images/banh-trung-thu-buu-yen-3.jpg"}
                alt={"title"}
                width={100}
                height={300}
                quality={100}
                className="transition-opacity w-full object-contain md:object-cover duration-300 hover:opacity-85"
              />
            </a>

            <label htmlFor="counter-input" className="sr-only">
              Choose quantity:
            </label>
            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <button
                  onClick={() => setNumber((prev) => prev - 1)}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
                  placeholder=""
                  value={number}
                  defaultValue={1}
                  min={1}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  onClick={() => setNumber((prev) => prev + 1)}
                  data-input-counter-increment="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  "
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900  ">
                  {122.0 * number === 1 || number == 1 ? 122.0 : 122.0 * number}
                  đ
                </p>
              </div>
            </div>

            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <a
                href="#"
                className="text-base text-xl font-semibold text-primary hover:underline  "
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
