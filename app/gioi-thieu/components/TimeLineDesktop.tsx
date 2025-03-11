import React from "react";

const TimeLineDesktop = () => {
  return (
    <div className="relative hidden md:block">
      <div className="absolute left-1/3 lg:left-1/4 md:left-1/5 transform -translate-x-1/5 h-full border-l-2 border-dashed border-gray-300"></div>
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="w-1/3 md:w-1/5 lg:w-1/4  text-right pr-8">
            <div className="bg-primary text-white py-2 px-7 rounded-md inline-block">
              2017
            </div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="bg-white sm:bg-yellow-400 md:bg-lime-600 lg:bg-amber-700 p-4 rounded-md shadow-md">
              <p>
                Ra mắt các combo bánh trung thu Hội An Mooncake, được nhiều
                khách hàng tin tưởng.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 md:w-1/5 lg:w-1/4 text-right pr-8">
            <div className="bg-primary text-white py-2 px-7 rounded-md inline-block">
              2018
            </div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <p>
                Ra mắt hệ thống phân phối online bánh trung thu. Tiếp cận được
                nhiều khách hàng hơn.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 md:w-1/5 lg:w-1/4 text-right pr-8">
            <div className="bg-primary text-white py-2 px-7 rounded-md inline-block">
              2019
            </div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-4 h-4 rounded-full"></div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <p>
                Những năm thành công với các công ty lớn đặt sản xuất số lượng
                lớn làm quà tặng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineDesktop;
