"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdClear } from "react-icons/md";

function AboutDoctorCard({
  image,
  description,
  header,
}: {
  image: string;
  description: string;
  header: string;
}) {
  return (
    <>
      <div className="rounded-lg shadow-md hover:shadow-lg shadow-primary hover:shadow-primary duration-300 flex flex-col gap-2">
        <Image
          src={image}
          alt="image"
          width={500}
          height={500}
          className="w-full max-h-[200px] h-1/2 rounded-t-lg object-cover"
          priority
        />
        <h1 className="px-2 font-bold">{header}</h1>
        <p className="px-2 text-xs text-text_gray line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          {/* @ts-ignore */}
          <AlertDialog>
            <AlertDialogTrigger className="text-sm rounded-bl-md bg-green_color w-fit py-1 px-3 text-white font-semibold mt-auto">
              Detail
            </AlertDialogTrigger>
            <AlertDialogContent className="w-full">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <Image
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                    className="w-full max-h-[200px] rounded-t-lg object-cover"
                    priority
                  />
                  {header}
                </AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="font-bold text-lg">
                <AlertDialogCancel>
                  <MdClear />
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </>
  );
}

export default AboutDoctorCard;
