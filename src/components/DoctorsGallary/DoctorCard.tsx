"use client";
import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

interface doctorInfo {
    doctorName: string;
    doctorImage:string;
    doctorAspect: string;
}

function DoctorCard({doctorName, doctorImage, doctorAspect}:doctorInfo) {
  return (
    <Card className="w-full p-4 shadow-md shadow-primary hover:shadow-lg duration-300 hover:shadow-primary">
      <div className="grid place-items-center gap-2">
        <Image
          src={doctorImage}
          alt={doctorName}
          width={500}
          height={590}
          className="rounded-full h-16 w-16 object-cover"
        />
        <h2 className="font-bold text-sm">{doctorName}</h2>
        <p className="text-text_gray text-sm">{doctorAspect}</p>
      </div>
      <div className="flex w-fit p-2 justify-between mx-auto gap-2">
        <span className="w-8 h-8 hover:bg-primary grid place-items-center text-text_gray hover:text-white duration-300 border">
          <FaTwitter />
        </span>
        <span className="w-8 h-8 hover:bg-primary grid place-items-center text-text_gray border hover:text-white duration-300">
          <FaFacebookF />
        </span>
        <span className="w-8 h-8 hover:bg-primary grid place-items-center text-text_gray border hover:text-white duration-300">
          <FaLinkedinIn />
        </span>
      </div>
    </Card>
  );
}

export default DoctorCard;
