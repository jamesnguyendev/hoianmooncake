import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderCart from "./HeaderCart";

const Header = () => {
  return (
    <div className="fixed w-full shadow-lg bg-primary uppercase font-semibold py-3 z-50">
      <div className="container text-second flex items-center justify-between md:justify-around">
        <div className="flex gap-7 max-xl:order-3 ">
          <Link href={"/"} className="hidden xl:block">
            Trang Chủ
          </Link>
          <Link href={"/gioi-thieu"} className="hidden xl:block">
            Giới thiệu
          </Link>
          <Link href={"/shop"} className="hidden xl:block">
            Sản phẩm
          </Link>
          <Link href={"/catalogue"} className="hidden xl:block">
            Catalogue
          </Link>
          <HeaderMobile />
        </div>
        <Link href={"/"} className="max-xl:order-2">
          <Image
            alt="Logo mooncake"
            src={"/images/logo.png"}
            width={80}
            height={90}
          />
        </Link>
        <div className="flex gap-7 items-center max-xl:order-1">
          <Link href={"/hop-banh-trung-thu"} className="hidden xl:block">
            {" "}
            Hộp Bánh
          </Link>
          <Link href={"/bang-gia-banh-trung-thu"} className="hidden xl:block">
            {" "}
            Bảng Giá
          </Link>
          <Link href={"/lien-he"} className="hidden xl:block">
            Liên Hệ
          </Link>
          <Link href={"/chinh-sach-kinh-doanh"} className="hidden xl:block">
            Chính sách
          </Link>
          <HeaderCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
