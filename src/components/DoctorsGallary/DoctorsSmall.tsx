import React from "react";
import DoctorCard from "./DoctorCard";
import { Button } from "../ui/button";

function DoctorsSmall() {
  return (
    <div className="my-10 w-full flex flex-col gap-4">
      <div className="text-center">
        <h1 className="text-4xl my-5 text-black font-bold tracking-wider">
          We Are Here <span className="text-primary">For You</span>
        </h1>
        <p className="text-sm max-w-[700px] text-balance mx-auto text-text_gray my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          quibusdam similique cumque deleniti dolorem, id minima neque amet.
          Repellendus officiis nam molestias quae nostrum dolorum ratione nisi
          cupiditate perferendis quidem.
        </p>
      </div>
      <div className="w-full max-w-[1200px] mx-auto grid  sm:grid-cols-2 sml:grid-cols-4 gap-5">
        <DoctorCard
          doctorImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D"
          doctorName="Dr. Ravi O'Leigh"
          doctorAspect="Cardiac Surgery"
        />
        <DoctorCard
          doctorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJn7h4zNSvU73nq2u3vbJ3HP_MmSjyygJdGA&usqp=CAU"
          doctorName="Dr. John"
          doctorAspect="Bone Specialist"
        />
        <DoctorCard
          doctorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetBue5OCx1GAXLJXROCBEe86h6HcBg29jsg&usqp=CAU"
          doctorName="Dr. Alexander"
          doctorAspect="Skin Specialist"
        />
        <DoctorCard
          doctorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cyKLTOT2BG1JqCOq4agn9t0Gv-VcD_Pi8w&usqp=CAU"
          doctorName="Dr. Loura"
          doctorAspect="Brain Specialist"
        />
      </div>
      <Button
        variant={"outline"}
        className="w-fit border-primary mx-auto hover:bg-primary hover:text-white my-5 duration-200"
      >
        View all Doctors
      </Button>
    </div>
  );
}

export default DoctorsSmall;
