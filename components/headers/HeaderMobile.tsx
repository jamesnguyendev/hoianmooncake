"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Đóng menu khi click vào item

  return (
    <div className="block xl:hidden">
      <div className="relative">
        {/* Nút mở menu */}
        <button onClick={toggleMenu} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 cursor-pointer hover:opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Menu chính */}
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col z-50 transition-opacity">
            <div className="flex items-center justify-between ps-3 pe-7 w-full">
              <Link href={"/"} onClick={closeMenu}>
                <Image
                  alt="Logo mooncake"
                  src={"/images/logo.png"}
                  width={75}
                  height={75}
                  quality={100}
                />
              </Link>
              {/* Nút đóng menu */}
              <button onClick={closeMenu} className="text-3xl font-bold">
                ✖
              </button>
            </div>

            {/* Danh sách menu */}
            <div
              className="capitalize flex flex-col font-thin *:px-5 *:cursor-pointer text-black *:border-t *:last:border-b *:border-gray-200 
              *:py-3 *:hover:text-white *:hover:bg-[#f9cb4b] *:hover:duration-500"
            >
              <Link href={"/"} onClick={closeMenu}>
                Trang chủ
              </Link>
              <Link href={"/gioi-thieu"} onClick={closeMenu}>
                giới thiệu
              </Link>
              <Link href={"/shop"} onClick={closeMenu}>
                sản phẩm
              </Link>
              <Link href={"/catelogue"} onClick={closeMenu}>
                catelogue
              </Link>
              <Link href={"/hop-banh-trung-thu"} onClick={closeMenu}>
                hộp bánh
              </Link>
              <Link href={"/bang-gia-banh-trung-thu"} onClick={closeMenu}>
                bảng giá
              </Link>
              <Link href={"/lien-he"} onClick={closeMenu}>
                liên hệ
              </Link>
              <Link href={"/chinh-sach-kinh-doanh"} onClick={closeMenu}>
                chính sách
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
