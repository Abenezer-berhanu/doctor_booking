import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function AboutDoctorCard() {
  return (
    <div className="rounded-lg shadow-md hover:shadow-lg shadow-primary hover:shadow-primary duration-300 flex flex-col gap-2 max-w-[250px]">
      <Image
        src={
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt="image"
        width={500}
        height={500}
        className="w-full max-h-[200px] h-1/2 rounded-t-lg object-cover"
        priority
      />
      <h1 className="px-2 font-bold">Header Title</h1>
      <p className="px-2 text-xs text-text_gray line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem commodi
        ad! Alias odio nostrum autem odit nesciunt, omnis explicabo laboriosam.
      </p>
      <Button className="text-sm rounded-none w-fit mt-auto rounded-bl-md bg-green_color" size={"sm"}>
        Read More
      </Button>
    </div>
  );
}

export default AboutDoctorCard;
