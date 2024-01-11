"use client";
import { services } from "@/lib/datas";
import { MedicalService } from "@/lib/types";
import React, { useState } from "react";
import AboutDoctorCard from "../AboutLanding/AboutDoctorCard";
import { Button } from "../ui/button";

function ServicesCards() {
  const [amount, setAmount] = useState<number>(4);
  const handleAmount = () => {
    if (amount >= services?.length) return;
    setAmount((prev: number) => prev + 4);
  };
  return (
    <>
      <div className="grid grid-cols-2 sml:grid-cols-4 gap-3 max-w-[1200px] mx-auto">
        {services
          .slice(0, Number(amount))
          .map((service: MedicalService, idx: number) => (
            <AboutDoctorCard
              image={service.image}
              description={service.definition}
              header={service.title}
              key={idx}
            />
          ))}
      </div>
     <div className="my-10 flex justify-center">
     <Button
        className="text-sm border border-primary w-fit"
        variant={"outline"}
        size={"sm"}
        onClick={handleAmount}
        disabled={amount >= services.length}
      >
        show more
      </Button>
     </div>
    </>
  );
}

export default ServicesCards;
