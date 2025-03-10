import Image from "next/image";
import Link from "next/link";

const CardMoonCakeCombo = ({
  title,
  newPrice,
  oldPrice,
  firstImage,
  secondImage,
}: {
  title: string;
  newPrice: number;
  oldPrice: number;
  firstImage: string;
  secondImage: string;
}) => {
  const formattedNewPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(newPrice)
    .replace(/\./g, ",");

  const formattedOldPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(oldPrice)
    .replace(/\./g, ",");

  return (
    <div className="flex flex-col items-center gap-6 font-semibold">
      <div className="relative w-full h-[550]">
        <Image
          src={firstImage}
          alt={title}
          layout="fill"
          quality={100}
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-0"
        />
        <Image
          src={secondImage}
          alt={title}
          quality={100}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
        />
      </div>
      <div
        className="flex flex-col items-center gap-3 font-semibold grow
      "
      >
        <Link
          href={"/"}
          className="uppercase text-primary text-2xl text-center grow"
        >
          {title}
        </Link>
        <div className="flex gap-4">
          <span className="text-red-600 text-xl font-thin line-through">
            {formattedOldPrice}
          </span>
          <span className="text-red-600 text-xl">{formattedNewPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMoonCakeCombo;
