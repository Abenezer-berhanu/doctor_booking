import Image from "next/image";
import React from "react";

function FooterRecent() {
  return (
    <div className="flex gap-2 items-center mb-3">
      <Image
        src={"/hero.png"}
        alt=""
        height={500}
        width={500}
        className="w-10 h-10 sml:w-16 sml:h-16 rounded-lg border"
      />
      <span className="flex flex-col">
      <h2 className="text-semibold max-w-[250px] text-start">
        Transfusion strategy and heart surgery
      </h2>
      <p className="text-primary text-sm text-start">June 12,2003</p>
      </span>
    </div>
  );
}

export default FooterRecent;
