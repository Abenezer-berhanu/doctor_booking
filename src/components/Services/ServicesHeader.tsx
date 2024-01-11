import Image from "next/image";
import React from "react";

function ServicesHeader() {
  return (
    <div className="grid grid-cols-1 sml:grid-cols-3 mx-auto max-w-[1000px] gap-2 relative mb-8">
      <Image
        src={"/service1.jpg"}
        alt=""
        width={500}
        height={500}
        quality={100}
        className="w-full h-full object-cover"
      />
      <Image
        src={"/service2.jpg"}
        alt=""
        width={500}
        height={500}
        quality={100}
        className="w-full h-full object-cover"
      />
      <Image
        src={"/service3.jpg"}
        alt=""
        width={500}
        height={500}
        quality={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ServicesHeader;
