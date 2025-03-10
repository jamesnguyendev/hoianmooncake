import React from "react";
import CardMoonCakeCombo from "./CardMoonCakeCombo";

const ProductCombo = ({ title = true }: { title?: boolean }) => {
  return (
    <section className="container my-10">
      <div className="text-primary text-center text-3xl font-semibold">
        {title ? (
          <>
            <h3>COMBO BÁNH TRUNG THU</h3>
            <h3>HỘI AN MOONCAKE</h3>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className=" my-7 grid grid-cols-1 md:grid-cols-2 gap-7">
        <CardMoonCakeCombo
          title="Combo Hoa Viên N.1"
          newPrice={210000}
          oldPrice={240000}
          firstImage="/images/z5778557345204_27b280477ebe02cc147c294ac1ca7147.jpg"
          secondImage="/images/combo-hoa-vien-2.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Hoa Viên N.2"
          newPrice={275000}
          oldPrice={310000}
          firstImage="/images/z5778557349591_76f6256fae9b691c7c455928ef3591a2.jpg"
          secondImage="/images/combo-hoi-an-mooncake-4.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Hoa Viên N.3"
          newPrice={485000}
          oldPrice={540000}
          firstImage="/images/z5778557351508_b3d9600fa13655ca07527c3ea7ba8e82.jpg"
          secondImage="/images/hop-banh-trung-thu-hoi-an-mooncake-3.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Hoa Viên N.5"
          newPrice={600000}
          oldPrice={545000}
          firstImage="/images/z5778557356341_f4f63b38505571f03bc89527a0bbd2ca.jpg"
          secondImage="/images/combo-hoa-vien-hoi-an-mooncake-4.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Hoa Viên N.6"
          newPrice={835000}
          oldPrice={920000}
          firstImage="/images/z5778557355804_0b45a9bf667e4e71b7e40858369abb21.jpg"
          secondImage="/images/hop-banh-trung-thu-hoa-vien-6.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Phú Quý 01"
          newPrice={620000}
          oldPrice={640000}
          firstImage="/images/hop-banh-trung-thu-phu-quy-1.jpg"
          secondImage="/images/hop-banh-trung-thu-hoa-vien-6.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Phú Quý 02"
          newPrice={690000}
          oldPrice={720000}
          firstImage="/images/phu-quy-02-18.png"
          secondImage="/images/combo-banh-trung-thu-buu-yen-7-Buu-Yen (1).jpg"
        />
        <CardMoonCakeCombo
          title="Combo Tâm Giao 01"
          newPrice={990000}
          oldPrice={1030000}
          firstImage="/images/combo-tam-giao.jpg"
          secondImage="/images/combo-banh-trung-thu-buu-yen-1-Buu-Yen.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Cung Đình 01"
          newPrice={3150000}
          oldPrice={3205000}
          firstImage="/images/combo-cung-dinh-01.jpg"
          secondImage="/images/combo-banh-trung-thu-buu-yen-6-Buu-Yen.jpg"
        />
        <CardMoonCakeCombo
          title="Combo Cung Đình 02"
          newPrice={1250000}
          oldPrice={1350000}
          firstImage="/images/combo-cung-dinh-n.2.jpg"
          secondImage="/images/combo-cung-dinh-n.2.jpg"
        />
      </div>
    </section>
  );
};

export default ProductCombo;
