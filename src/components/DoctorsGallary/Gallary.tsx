import React from "react";
import { Button } from "../ui/button";
import { CarouselSlide } from "./Carousel";

function Gallary() {
  return (
    <div>
      <div className="w-full max-w-[900px] mx-auto flex max-sml:flex-col max-sml:gap-5 justify-between items-center my-10">
        <h1 className="text-4xl max-sml:text-2xl grid text-start font-bold">
          Our Gallery Best Doctors
          <span className="text-primary">Healthy Treatment</span>
        </h1>
        <Button className="text-sm">View all Gallery</Button>
      </div>
      <CarouselSlide />
    </div>
  );
}

export default Gallary;
