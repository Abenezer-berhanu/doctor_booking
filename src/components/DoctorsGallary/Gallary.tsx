import React from "react";
import { Button } from "../ui/button";
import { CarouselSlide } from "./Carousel";

function Gallary() {
  return (
    <div>
      <div className="w-full max-w-[900px] mx-auto flex justify-between items-center">
        <h1>
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
