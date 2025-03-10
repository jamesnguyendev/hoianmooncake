import React from "react";
import CardMoonCake from "./CardMoonCake";

const ProductShowcase = () => {
  return (
    <section className="container my-7 ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
        <CardMoonCake
          soldOut="/images/soldout.png"
          discountLabel="/images/top-choice.png"
          title="BTT Tiramisu Phô Mai"
          price={105000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-1.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-1.jpg"
        />
        <CardMoonCake
          discountLabel="/images/top-choice.png"
          title="BTT Đậu Xanh Hoàng Kim"
          price={105000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-8.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-4.jpg"
        />
        <CardMoonCake
          soldOut="/images/soldout.png"
          title="BTT Hạt Sen – Hạt Chia – Mắc Ca (1 Trứng)"
          price={135000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-7.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-6.jpg"
        />
        <CardMoonCake
          soldOut="/images/soldout.png"
          title="BTT Khoai Môn – Hạt Macca (1 Trứng)"
          price={145000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-5.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-3.jpg"
        />
        <CardMoonCake
          soldOut="/images/soldout.png"
          discountLabel="/images/top-choice.png"
          title="BTT Than Tre Sò Điệp Sốt Hồng Kông ( 1 Trứng)"
          price={155000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-3.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-2.jpg"
        />
        <CardMoonCake
          soldOut="/images/soldout.png"
          discountLabel="/images/limited.png"
          title="BTT Gà Quay Vi Cá (1 Trứng)"
          price={155000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-6.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-8.jpg"
        />
        <CardMoonCake
          discountLabel="/images/limited.png"
          title="BTT Hải Sâm Tôm Hùm (1 Trứng)"
          price={165000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-6.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-5.jpg"
        />
        <CardMoonCake
          title="BTT Bào Ngư Sốt Rượu Vang (1 Trứng)"
          price={165000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-4.jpg"
          secondImage="/images/nhan-banh-trung-thu-hoianmooncake-7.jpg"
        />
        <CardMoonCake
          title="BTT Thập Cẩm Cá Hồi Sốt Chanh Leo (1 trứng)"
          price={165000}
          firstImage="/images/banh-trung-thu-hoi-an-mooncake-4.jpg"
          secondImage="/images/banh-trung-thu-hoi-an-mooncake-4.jpg"
        />
        <CardMoonCake
          title="BTT Yến Sào Hạt Sen Trà Xanh – Macca"
          price={155000}
          firstImage="/images/banh-trung-thu-buu-yen-2.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-2.jpg"
        />
        <CardMoonCake
          title="BTT Yến Sào Hạt Sen – Hạnh Nhân – Saffron"
          price={155000}
          firstImage="/images/banh-trung-thu-buu-yen-3.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-3.jpg"
        />
        <CardMoonCake
          title="BTT Nhất Yến Thượng Hạng"
          price={165000}
          firstImage="/images/banh-trung-thu-buu-yen-4.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-4.jpg"
        />
        <CardMoonCake
          title="BTT Yến Sào Hạt Sen – Đông Trùng Hạ Thảo"
          price={165000}
          firstImage="/images/banh-trung-thu-buu-yen-5.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-5.jpg"
        />
        <CardMoonCake
          title="BTT Yến Sào Bào Ngư – Vi Cá (2 Trứng)"
          price={195000}
          firstImage="/images/banh-trung-thu-buu-yen-6.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-6.jpg"
        />
        <CardMoonCake
          title="BTT Yến Sào Hải Sâm – Sò Điệp (2 Trứng)"
          price={195000}
          firstImage="/images/banh-trung-thu-buu-yen-1.jpg"
          secondImage="/images/banh-trung-thu-buu-yen-1.jpg"
        />
      </div>
    </section>
  );
};

export default ProductShowcase;
