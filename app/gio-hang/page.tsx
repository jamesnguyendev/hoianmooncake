import React from "react";
import CartShop from "./components/CartShop";
import OrderSummary from "./components/OrderSummary";

const Page = () => {
  return (
    <section className="bg-white py-8md:py-16">
      <div className="mx-auto max-w-screen-xl py-36 px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Giỏ hàng
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <CartShop />
          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default Page;
