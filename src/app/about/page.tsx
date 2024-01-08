import AboutDoctorCard from "@/components/AboutLanding/AboutDoctorCard";
import AboutFooter from "@/components/AboutLanding/AboutFooter";
import AboutLanding from "@/components/AboutLanding/AboutLanding";
import AboutTestimonials from "@/components/AboutLanding/AboutTestimonials";
import { Metadata } from "next";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About Us",
  description: "we provide good treatment.",
};

function page() {
  return (
    <div className="w-full min-h-screen mb-40 relative flex flex-col gap-5">
      <AboutLanding />
      <p className="text-lg text-center text-bold text-green_color font-serif">
        | Our Services
      </p>
      <h1 className="text-center font-bold text-3xl">Our Teams</h1>
      <div className="grid grid-cols-2 p-2 sml:grid-cols-4 gap-8 mx-auto">
        <AboutDoctorCard />
        <AboutDoctorCard />
        <AboutDoctorCard />
        <AboutDoctorCard />
      </div>
      <div className="w-full border flex flex-col justify-start text-center sml:items-center relative z-10 gap-4 py-20 px-3">
        <p className="text-green_color font-semibold">| About Us</p>
        <p className="text-4xl font-bold text-black dark:text-white">
          Find The Right Doctor Right
          <br /> <span className="text-primary">At Your Fingertip</span>
        </p>
        <p className="text-text_gray max-w-[800px] mx-auto text-xs text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          fugit! Odit voluptatibus, ad doloremque obcaecati maxime accusamus
          porro saepe sapiente qui error eos officiis ab. Repellendus totam
          suscipit provident inventore. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Repudiandae, fugit! Odit voluptatibus, ad doloremque
          obcaecati maxime accusamus porro saepe sapiente qui error eos officiis
          ab. Repellendus totam suscipit provident inventore. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Repudiandae, fugit! Odit
          voluptatibus, ad doloremque obcaecati maxime accusamus porro saepe
          sapiente qui error eos officiis ab. Repellendus totam suscipit
          provident inventore.
        </p>
        <ul className="flex flex-col gap-2 pb-5 sml:pb-10 items-center">
          <li className="text-black dark:text-white items-center font-semibold flex gap-2">
            <IoCheckmarkCircleOutline className="text-primary text-lg" />
            More doctor sit amet, consecteur adipisc sed do.
          </li>
          <li className="text-black dark:text-white items-center font-semibold flex gap-2">
            <IoCheckmarkCircleOutline className="text-primary text-lg" />
            More doctor sit amet, consecteur adipisc sed do.
          </li>
          <li className="text-black dark:text-white items-center font-semibold flex gap-2">
            <IoCheckmarkCircleOutline className="text-primary text-lg" />
            More doctor sit amet, consecteur adipisc sed do.
          </li>
        </ul>
        <hr />
        <div className="flex flex-col gap-5">
          <p className="text-center text-lg font-semibold text-green_color">
            | Testimonials
          </p>
          <p className="text-3xl font-bold text-center">What Our Client Says</p>
          <div className="grid p-2 grid-cols-1 sml:grid-cols-3 gap-5 place-items-center">
            <AboutTestimonials />
            <AboutTestimonials />
            <AboutTestimonials />
            <AboutTestimonials />
            <AboutTestimonials />
            <AboutTestimonials />
          </div>
        </div>
        <AboutFooter />
      </div>
    </div>
  );
}

export default page;
