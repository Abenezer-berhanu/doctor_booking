import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function AboutLanding() {
  return (
    <>
      <div className="w-full h-screen bg-black absolute -z-10">
        <video
          src="/doctorVideo.mp4"
          autoPlay
          controls={false}
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="w-full h-screen flex flex-col sml:justify-center max-sml:pt-5 gap-4 leading-10">
        <h1 className="text-3xl sml:text-5xl text-balance font-bold text-center text-white flex flex-col gap-2">
          Take Care of Your Body And,
          <br /> It Will Take care of You.
        </h1>
        <p className="text-sm text-white text-center max-w-[500px] mx-auto text-balance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia
          enim illum, voluptate quibusdam quam incidunt saepe, dolores eos fuga
          eius corporis minus eaque veniam inventore expedita. Officia, dolorum
          fuga!
        </p>
        <div className="flex max-sml:flex-col max-sml:items-center justify-center gap-2">
          <Button className="w-fit">Contact My Doctor</Button>
          <Button className="w-fit" variant={"outline"}>
            <Link href={"/signup"}>Register to DocTreat</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default AboutLanding;
