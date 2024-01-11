import React from "react";
import Mininavbar from "./Mininavbar";
import Link from "next/link";
import Image from "next/image";
import Pages from "./Pages";
import { FaPhoneVolume } from "react-icons/fa6";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import { ModeToggle } from "../ModeToggle";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="">
      <Mininavbar />
      <div className="py-5 flex px-4 sml:px-0 justify-between sml:justify-around gap-5 items-center">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={20}
            height={20}
            className=""
          />
          <p className="font-bold font-lg sml:text-xl text-primary">DocTreat</p>
        </Link>
        <Pages />
        <div className="flex items-center gap-2">
          <span className="flex items-center text-text_gray gap-2 max-sml:hidden">
            <FaPhoneVolume className="text-primary text-lg sml:text-2xl" />
            <span className="flex flex-col text-sm">
              <p className="text-sm font-semibold">Call Center:</p>
              <p className="text-xs font-semibold text-black dark:text-white">
                +(444) 864 434 57
              </p>
            </span>
          </span>
          <Button
            asChild
            className="rounded-xl bg-primary font-semibold text-white  max-sml:hidden"
          >
            <Link
              href={"/appointment"}
              className="flex items-center justify-center gap-2 text-sm"
            >
              Appointment
              <FaPlus className="h-full" />
            </Link>
          </Button>
          <div className="sml:ml-5 ml-2 flex items-center justify-center text-primary">
            <Dropdown />
          </div>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
