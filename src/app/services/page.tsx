import AboutDoctorCard from "@/components/AboutLanding/AboutDoctorCard";
import ServicesCards from "@/components/Services/ServicesCards";
import ServicesHeader from "@/components/Services/ServicesHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/datas";
import { MedicalService } from "@/lib/types";
import React from "react";

function page() {
  return (
    <div className="pb-40 relative px-4 ">
      <h1 className="text-4xl font-bold text-primary my-5 text-center underline">
        Services
      </h1>
      <ServicesHeader />
      <p className="text-text_gray mx-auto max-w-[900px] text-sm text-beauty text-center mb-5">
        Welcome to our comprehensive range of healthcare services. At [Your
        Hospital Name], we are dedicated to providing exceptional medical care
        tailored to your unique needs. Our Services page is your gateway to
        discovering the diverse and specialized offerings we provide to ensure
        your well-being.
      </p>
      <hr />
      <p className="text-lg text-center font-bold text-green_color my-8">
        | Our Services
      </p>
      <ServicesCards />
    </div>
  );
}

export default page;
