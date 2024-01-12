"use client";
import { doctors } from "@/lib/datas";
import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { Button } from "../ui/button";
import { DoctorsType } from "@/lib/types";

function DoctorsList() {
  const [amount, setAmount] = useState<number>(4);
  const handleClick = () => {
    if (amount >= doctors.length) return;
    setAmount((prev: number) => prev + 4);
  };
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto grid sm:grid-cols-2 sml:grid-cols-4 gap-5">
        {doctors
          .slice(0, Number(amount))
          .map((doctor: DoctorsType, idx: number) => (
            <DoctorCard
              doctorImage={doctor.docImage}
              doctorAspect={doctor.docAspect}
              doctorName={doctor.docName}
              key={idx}
            />
          ))}
      </div>
      <Button
        variant={"outline"}
        size={"sm"}
        className="w-fit border-primary mx-auto my-5 text-sm"
        onClick={handleClick}
        disabled={amount >= doctors.length}
      >
        View more Doctors
      </Button>
    </>
  );
}

export default DoctorsList;
