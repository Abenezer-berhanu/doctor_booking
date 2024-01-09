import React from "react";
import FooterCard from "./FooterCard";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import FooterRecent from "./FooterRecent";

function Footer() {
  return (
    <div className="w-full bg-bg_black py-20 text-white">
      <FooterCard />
      <div className="grid grid-cols-1 max-sml:gap-5 sml:grid-cols-8 w-full mt-24 max-w-[1300px] px-2 mx-auto max-sml:place-items-center">
        <div className="col-span-3 max-sm:col-span-1 flex flex-col gap-2 max-sml:items-center">
          <span className="text-xl font-bold flex gap-2 items-center text-primary">
            <Image
              src={"/logo.png"}
              alt=""
              width={500}
              height={500}
              className="w-10 h-10 rounded-full"
            />
            DocTreat
          </span>
          <p className="text-xs text-balance text-text_gray max-w-lg max-sml:text-center">
            Subscribe to our newsletter today to receive latest news
            administration cost effectively for tactical data.
          </p>
          <div className="flex w-full gap-3 mt-2 max-sml:justify-center">
            <span className="text-primary p-3 border rounded-md hover:bg-primary hover:text-white duration-300">
              <FaFacebookF />
            </span>
            <span className="text-primary p-3 border rounded-md hover:bg-primary hover:text-white duration-300">
              <FaTwitter />
            </span>
            <span className="text-primary p-3 border rounded-md hover:bg-primary hover:text-white duration-300">
              <FaInstagramSquare />
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-bold text-xl mb-5">Useful Links</h1>
          <ul className="flex flex-col gap-3 text-xs text-text_gray ">
            <li className="hover:text-white duration-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Terms of use
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Our services
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Privacy & Policy
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Changelog
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-bold text-xl mb-5">Popular Services</h1>
          <ul className="flex flex-col gap-3 text-xs text-text_gray">
            <li className="hover:text-white duration-200 cursor-pointer">
              Cardiology Care
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Urgent Care
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Orthopedic Care
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Diagnosis department
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Gastroenterology
            </li>
            <li className="hover:text-white duration-200 cursor-pointer">
              Dental service
            </li>
          </ul>
        </div>
        <div className="col-span-3 max-sm:col-span-1 flex flex-col items-center text-center">
          <h1 className="text-bold text-xl mb-5">Popular Services</h1>
          <FooterRecent />
          <FooterRecent />
        </div>
      </div>
    </div>
  );
}

export default Footer;
