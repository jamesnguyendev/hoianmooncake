import CardBanner from "@/components/CardBanner";
import React from "react";
import Comment from "../gioi-thieu/components/Comment";
import ReplyComment from "@/components/ReplyComment";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Các Hộp Bánh Trung Thu Cao Cấp Sang Trọng | Hội An MoonCake",
    description: "Giới thiệu Catalogue Bánh Trung Thu",
  };
};

const Page = () => {
  return (
    <div className="pt-28">
      <div className="flex justify-center flex-col items-center uppercase gap-3 my-4 text-primary font-semibold text-2xl">
        <span>Catalogue bánh Trung Thu </span>
        <span>Hội An Mooncake 2024</span>
      </div>
      <CardBanner
        border
        firstImage="/images/catalogue-banh-hoianmooncake-1.jpg"
        secondImage="/images/catalogue-banh-hoianmooncake-2.jpg"
      />
      <CardBanner
        border
        firstImage="/images/catalogue-banh-hoianmooncake-3.jpg"
        secondImage="/images/catalogue-banh-hoianmooncake-4.jpg"
      />
      <CardBanner
        border
        firstImage="/images/HA-bang-gia-banh.jpg"
        secondImage="/images/nhan-banh-HA-08-1.png"
      />
      <CardBanner
        border
        firstImage="/images/z5778556287205_0c64fe3649eb2345d6c494d0d954ed15.jpg"
        secondImage="/images/z5778556290322_aed02f2784ea30b9642bcdfec4d98834.jpg"
      />
      <CardBanner
        border
        firstImage="/images/z5778556299912_49416d8e4e2534f6c422c2c218840851.jpg"
        secondImage="/images/HA1.jpg"
      />
      <CardBanner
        border
        firstImage="/images/HA2.jpg"
        secondImage="/images/catalogue-banh-hoianmooncake-12.jpg"
      />
      <CardBanner
        border
        firstImage="/images/catalogue-banh-hoianmooncake-13.jpg"
        secondImage="/images/t9-HA-mobile.jpg"
      />
      <CardBanner
        border
        firstImage="/images/catalogue-banh-hoianmooncake-15.jpg"
        secondImage="/images/catalogue-banh-hoianmooncake-16.jpg"
      />
      <CardBanner
        border
        firstImage="/images/10-li-do-ha.jpg"
        secondImage="/images/catalogue-banh-hoianmooncake-18.jpg"
      />
      <ReplyComment />
      <Comment />
    </div>
  );
};

export default Page;
