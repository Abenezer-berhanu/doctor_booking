import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function ContactHeader() {
  return (
    <div className="grid sml:grid-cols-4 gap-5 py-10">
      <div className="sml:col-span-2 max-w-[700px] h-full">
        <Image
          src={"/contact_hero.png"}
          alt="contact_hero"
          width={500}
          height={500}
          priority
          className=" h-full object-cover rounded-r-full w-full"
        />
      </div>
      <div className="sml:col-span-2 px-5">
        <h1 className="font-bold text-4xl text-primary mb-5">Contact Us</h1>
        <form className="flex flex-col gap-5" action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-black font-semibold dark:text-white">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="outline-none border-b-2 border-text_gray p-2 "
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-black font-semibold dark:text-white">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="outline-none border-b-2 border-text_gray p-2"
              placeholder="Enter a Valid email address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-black font-semibold dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              className="outline-none border-b-2 border-text_gray p-2"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="term" />
            <label htmlFor="term">
              I accept{" "}
              <Link href={"/terms-and-services"} className="text-primary">
                Terms and Services
              </Link>
            </label>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default ContactHeader;
