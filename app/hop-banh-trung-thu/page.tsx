import Banner from "@/components/Banner";
import ButtonContact from "@/components/ButtonContact";
import Collections from "@/components/Collections";
import React from "react";
import DropdownMoonCakeBox from "./components/DropdownMoonCakeBox";
import ProductCombo from "@/components/ProductCombo";
import CardBanner from "@/components/CardBanner";

const Page = () => {
  return (
    <div className="">
      <Banner
        mobile="/images/banner-mobile-ha-t7-768x1154.jpg"
        desktop="/images/banner-Hoi-An-desktop-1536x800.jpg"
      />
      <Collections />
      <div className="my-7">
        <ButtonContact />
      </div>
      <DropdownMoonCakeBox />
      <ProductCombo />
      <div className="my-7">
        <ButtonContact />
      </div>
      <CardBanner
        firstImage="/images/10-li-do-ha.jpg"
        secondImage="/images/banh-trung-thu-hoi-an-mooncake-catalouge-11.jpg"
      />
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
    </div>
  );
};

export default Page;
