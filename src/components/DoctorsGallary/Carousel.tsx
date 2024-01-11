"use client";
import * as React from "react";
import { imageLinks } from "./imagesData";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselSlide() {
  return (
    <Carousel className="w-full max-sml:max-w-[60%] max-w-[90%] mx-auto">
      <CarouselPrevious />
      <CarouselContent className="-ml-1">
        {imageLinks.map((image: string, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 relative rounded-md">
                  <Image
                    src={image}
                    alt="image"
                    fill
                    priority
                    className="rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
