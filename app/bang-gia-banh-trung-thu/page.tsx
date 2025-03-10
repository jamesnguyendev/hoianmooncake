import Banner from "@/components/Banner";
import ButtonContact from "@/components/ButtonContact";
import CardBanner from "@/components/CardBanner";
import Collections from "@/components/Collections";
import React from "react";
import DropdownMoonCakeBox from "../hop-banh-trung-thu/components/DropdownMoonCakeBox";
import ProductShowcase from "@/components/ProductShowcase";
import ProductCombo from "@/components/ProductCombo";
import ReplyComment from "@/components/ReplyComment";
import Comment from "../gioi-thieu/components/Comment";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Bánh Trung Thu Hội An MoonCake cao cấp, chiếu khấu cao",
    description: "Bảng giá Hội An MoonCake",
  };
};

const Page = () => {
  return (
    <div>
      <Banner
        mobile="/images/banner-mobile-ha-t7-768x1154.jpg"
        desktop="/images/banner-Hoi-An-desktop-1536x800.jpg"
      />
      <Collections />
      <div className="uppercase flex justify-center flex-col items-center font-semibold pt-5 my-9 text-2xl text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>
      <ButtonContact />{" "}
      <div className="uppercase flex justify-center flex-col items-center font-semibold pt-5 my-9 text-2xl text-primary">
        <p>NHÂN BÁNH TRUNG THU</p>
        <p className="">HỘI AN MOONCAKE</p>
        <CardBanner
          firstImage="/images/HA-bang-gia-banh.jpg"
          secondImage="/images/nhan-banh-HA-08-1.png"
        />
      </div>
      <DropdownMoonCakeBox />
      <ProductShowcase />
      <ButtonContact />
      <div className="">
        <div className="uppercase flex justify-center flex-col items-center font-semibold pt-5 my-9 text-4xl text-primary">
          <p>NHÂN BÁNH TRUNG THU</p>
          <p className="">HỘI AN MOONCAKE</p>
        </div>
      </div>
      <DropdownMoonCakeBox />
      <ProductCombo title={false} />
      <ButtonContact />
      <section className="container ">
        <p className="border-s-4 border-gray-400 ps-5 py-2 my-5">
          Hè sang Thu, một mùa Tết Trung Thu nữa lại về. Nhà nhà sum họp, ngồi
          quây quần bên nhau, uống tách trà nóng, thưởng thức bánh thơm ngon và
          kể nhau nghe bao chuyện vui trong cuộc sống. Hơn nữa Trung thu còn là
          dịp, là cơ hội để bày tỏ tình cảm, tình yêu thương gắn kết với người
          thân, đồng nghiệp, đối tác kinh doanh thông qua những hộp bánh Trung
          thu ý nghĩa – gửi gắm lời chúc tốt đẹp về cuộc sống viên mãn, tròn
          đầy.
        </p>
      </section>
      <ReplyComment />
      <Comment />
    </div>
  );
};

export default Page;
