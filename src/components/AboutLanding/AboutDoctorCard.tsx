import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function AboutDoctorCard({image, description, header}:{image:string, description:string, header:string}) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg shadow-primary hover:shadow-primary duration-300 flex flex-col gap-2 max-w-[250px]">
      <Image
        src={image}
        alt="image"
        width={500}
        height={500}
        className="w-full max-h-[200px] h-1/2 rounded-t-lg object-cover"
        priority
      />
      <h1 className="px-2 font-bold">{header}</h1>
      <p className="px-2 text-xs text-text_gray line-clamp-4">
        
      </p>
      <Button className="text-sm rounded-none w-fit mt-auto rounded-bl-md bg-green_color" size={"sm"}>
        Read More
      </Button>
    </div>
  );
}

export default AboutDoctorCard;
