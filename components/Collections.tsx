import Image from "next/image";
import React from "react";

const Collections = () => {
  return (
    <section>
      <div className="uppercase flex justify-center flex-col items-center my-9 text-4xl font-semibold text-primary">
        <p>Hội an mooncake</p>
        <p className="font-mono">collection 2024</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 container gap-1">
        <Image
          src={"/images/HA-1.png"}
          alt="ha-1"
          width={500}
          height={100}
          className="w-full border border-primary bg-primary"
        />
        <Image
          src={"/images/HA-2.png"}
          alt="ha-1"
          width={500}
          height={100}
          className="w-full border border-primary bg-primary"
        />
        <Image
          src={"/images/HA-3.png"}
          alt="ha-1"
          width={500}
          height={100}
          className="w-full border border-primary bg-primary"
        />
      </div>
    </section>
  );
};

export default Collections;
