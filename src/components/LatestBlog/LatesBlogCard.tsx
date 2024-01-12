import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";


function LatesBlogCard() {
  return (
    <Card className="shadow-md shadow-primary relative w-fit max-w-[350px] gap-4 flex flex-col">
      <span className="bg-bg_black text-white text-xs absolute right-5 top-5 px-3 py-1 rounded-3xl">
        Neurology
      </span>
      <CardHeader className="">
        <Image
          src={
            "https://images.unsplash.com/photo-1589279003513-467d320f47eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xpbmljfGVufDB8fDB8fHww"
          }
          alt="blog"
          width={500}
          height={500}
          className="max-w-[300px] w-full"
        />
      </CardHeader>
      <CardContent>
        <p className="flex text-xs items-start text-text_gray gap-1">
          <RxAvatar className="text-lg text-black" /> Admin
        </p>
        <h1 className="font-semibold text-lg text-start">
          Latest Equipment For Heart Treatment
        </h1>
        <p className="text-text_gray text-balance text-start text-sm">
          Eget gravida cum sociis natoque placerat in egestas erat imperdiet
        </p>
      </CardContent>
    </Card>
  );
}

export default LatesBlogCard;
