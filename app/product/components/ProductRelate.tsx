"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ProductRelate = () => {
  const slides = [
    {
      name: "BTT Yến Sào Hạt Sen Trà Xanh – Macca",
      price: 155000,
      img: "/images/banh-trung-thu-buu-yen-1.jpg",
    },
    {
      name: "BTT Yến Sào Hải Sâm – Sò Điệp (2 Trứng)",
      price: 200000,
      img: "/images/banh-trung-thu-buu-yen-2.jpg",
    },
    {
      name: "BTT Yến Sào Hạt Sen – Hạnh Nhân – Saffron",
      price: 120000,
      img: "/images/banh-trung-thu-buu-yen-3.jpg",
    },
    {
      name: "BTT Yến Sào Bào Ngư – Vi Cá (2 Trứng)",
      price: 296212,
      img: "/images/banh-trung-thu-buu-yen-4.jpg",
    },
    {
      name: "BTT Yến Sào Hạt Sen – Hạnh Nhân – Saffron",
      price: 120000,
      img: "/images/banh-trung-thu-buu-yen-5.jpg",
    },
    {
      name: "BTT Yến Sào Hạt Sen Trà Xanh – Macca",
      price: 196000,
      img: "/images/banh-trung-thu-buu-yen-6.jpg",
    },
    {
      name: "BTT Yến Sào Bào Ngư – Vi Cá (2 Trứng)",
      price: 120000,
      img: "/images/banh-trung-thu-buu-yen-3.jpg",
    },
    {
      name: "BTT Yến Sào Hạt Sen – Hạnh Nhân – Saffron",
      price: 220000,
      img: "/images/banh-trung-thu-buu-yen-1.jpg",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(4); // Desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(slides.length / itemsPerPage);

  // Handle Swipe for Both Touch & Mouse Events
  const handleStart = (clientX: number) => {
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    setEndX(clientX);
  };

  const handleEnd = () => {
    if (startX - endX > 50) {
      setCurrent((prev) => (prev + 1) % totalSlides); // Swipe Left → Next
    }
    if (startX - endX < -50) {
      setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides); // Swipe Right → Previous
    }
  };

  const formattedPriceFn = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    })
      .format(price)
      .replace(/\./g, ",");
  };

  return (
    <section className="container mb-8">
      <div className="flex flex-col gap-4 my-6">
        <h1 className="text-primary text-xl font-semibold">
          Sản phẩm liên quan
        </h1>
        <div className="h-1 w-full bg-gray-300 relative">
          <div className="h-1 w-20 bg-amber-400 absolute start-0"></div>
        </div>
        <div
          className="overflow-hidden relative w-full mt-5"
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
        >
          {/* Slides */}
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex min-w-full justify-center gap-4"
              >
                {slides
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage,
                  )
                  .map((s, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-center gap-4 justify-center items-center "
                    >
                      <Image
                        src={s.img}
                        alt={`Slide ${index}`}
                        width={550}
                        height={250}
                        quality={100}
                        className="object-cover w-full h-full rounded-lg shadow-lg"
                      />
                      <span className="text-2xl">{s.name}</span>
                      <span className="text-xl text-red-600">
                        {formattedPriceFn(s.price)}
                      </span>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="py-2 md:py-6 flex justify-center gap-3 w-full max-sm:mt-5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div
                onClick={() => setCurrent(i)}
                key={"circle" + i}
                className={`rounded-full w-4 h-4 cursor-pointer ${
                  i === current ? "bg-primary" : "bg-slate-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRelate;
