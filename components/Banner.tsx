import Image from "next/image";
import React from "react";

const Banner = ({ desktop, mobile }: { desktop: string; mobile: string }) => {
  return (
    <div>
      <Image
        src={desktop}
        alt="banner-Hoi-An-desktop"
        width={1000}
        height={100}
        quality={100}
        className="w-full pt-26 hidden md:block"
      />
      <Image
        src={mobile}
        alt="banner-Hoi-An-desktop"
        width={1000}
        height={100}
        quality={100}
        className="w-full pt-26 md:hidden"
      />
    </div>
  );
};

export default Banner;
