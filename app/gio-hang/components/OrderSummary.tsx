import React from "react";

const OrderSummary = () => {
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
        <p className="text-xl font-semibold text-gray-900 ">Tổng đơn hàng</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500  ">
                Giá gốc:
              </dt>
              <dd className="text-base font-medium text-gray-900  ">
                100.000 đ
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500  ">
                Tiết kiệm:
              </dt>
              <dd className="text-base font-medium text-green-600">
                299.000 đ
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500  ">Thuế:</dt>
              <dd className="text-base font-medium text-gray-900  ">0</dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2  ">
            <dt className="text-base font-bold text-gray-900  ">Tổng:</dt>
            <dd className="text-base font-bold text-gray-900  ">399.000 đ</dd>
          </dl>
        </div>

        <a
          href="#"
          className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   "
        >
          Thanh toán
        </a>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500  ">Hoặc</span>
          <a
            href="#"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline  "
          >
            Tiếp tục mua sắm
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="voucher"
              className="mb-2 block text-sm font-medium text-gray-900  "
            >
              Bạn có Voucher hay mã giảm giá?
            </label>
            <input
              type="text"
              id="voucher"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
              placeholder="Nhập ở đây"
              required
            />
          </div>
          <button
            type="submit"
            className="flex cursor-pointer w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
          >
            Áp dụng mã
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderSummary;
