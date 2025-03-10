import React from "react";
import BreadcrumProduct from "../components/BreadcrumProduct";
import Image from "next/image";
import DescriptionProduct from "../components/DescriptionProduct";
import ProductRelate from "../components/ProductRelate";

const Page = () => {
  return (
    <div className="pt-28">
      <BreadcrumProduct />
      <section className="container mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src={"/images/banh-trung-thu-buu-yen-5-600x601.jpg"}
            alt=""
            width={800}
            height={600}
            quality={100}
            className="w-full"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-primary font-semibold border-y border-gray-200 py-4">
              BTT Yến Sào Hạt Sen – Đông Trùng Hạ Thảo (1 Trứng)
            </h1>
            <span className="text-red-600 font-bold text-xl">165,000 ₫</span>
            <div className="flex flex-col text-sm gap-2  border-b border-gray-200 pb-7">
              <p className="font-bold">
                Loại bánh:{" "}
                <span className="font-normal">
                  Bánh nướng – Bánh trung thu nhân ngọt
                </span>
              </p>
              <p className="font-bold">
                Hương vị:{" "}
                <span className="font-normal">
                  Yến sào – hạt sen – đông trùng hạ thảo
                </span>
              </p>
              <p className="font-bold">
                Trứng muối: <span className="font-normal">1 trứng</span>
              </p>
              <p className="font-bold">
                Trọng lượng: <span className="font-normal">180gr</span>
              </p>
              <p className="font-bold">
                Hạn sử dụng:{" "}
                <span className="font-normal">60 ngày kể từ ngày sản xuất</span>
              </p>
            </div>
            <span className="flex gap-3 text-sm  border-y border-gray-200 mt-4 py-5">
              Danh mục:
              <span className="text-second">Bánh Trung Thu Nhân Mặn</span>
            </span>
          </div>
        </div>
      </section>
      <DescriptionProduct />
      <ProductRelate />
    </div>
  );
};

export default Page;
