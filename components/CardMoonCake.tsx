import Image from "next/image";
import Link from "next/link";

const CardMoonCake = ({
  title,
  price,
  firstImage,
  secondImage,
}: {
  title: string;
  price: number;
  firstImage: string;
  secondImage: string;
}) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(price)
    .replace(/\./g, ",");

  return (
    <div className="flex flex-col items-center gap-6 font-semibold">
      <div className="relative w-full h-[150px] md:h-[350px]">
        <Image
          src={firstImage}
          alt={title}
          layout="fill"
          quality={100}
          className="transition-opacity object-contain md:object-cover duration-300 hover:opacity-0"
        />
        <Image
          src={secondImage}
          alt={title}
          quality={100}
          layout="fill"
          className="absolute top-0 left-0 object-contain md:object-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
        />
      </div>
      <div
        className="flex flex-col items-center gap-6 font-semibold grow
      "
      >
        <Link
          href={"/"}
          className="uppercase text-primary text-2xl text-center grow line-clamp-2"
        >
          {title}
        </Link>
        <span className="text-red-600 text-xl">{formattedPrice}</span>
      </div>
    </div>
  );
};

export default CardMoonCake;
