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
import { auth } from "@/lib/auth";

async function Navbar() {
  const session = await auth();
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
        <div className="flex items-center max-sml:justify-around gap-2">
          <span className="sml:flex items-center text-text_gray gap-2 hidden">
            <FaPhoneVolume className="text-primary text-lg sml:text-xl" />
            <span className="flex flex-col text-sm">
              <p className="text-xs font-semibold">Call Center:</p>
              <p className="text-xs font-semibold text-black dark:text-white">
                +(444) 864 434 57
              </p>
            </span>
          </span>
          <Button
            asChild
            className="rounded-xl bg-primary font-semibold text-white hidden sml:flex"
          >
            <Link
              href={"/appointment"}
              className="flex items-center justify-center gap-2 text-sm"
            >
              Appointment
              <FaPlus className="h-full" />
            </Link>
          </Button>
          {session && (
            <div className="sml:ml-5 ml-2 flex items-center justify-center text-primary">
              <Dropdown />
            </div>
          )}
          {!session && (
            <Button size={"sm"} asChild>
              <Link className="text-xs" href={"/login"}>
                Log in
              </Link>
            </Button>
          )}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
