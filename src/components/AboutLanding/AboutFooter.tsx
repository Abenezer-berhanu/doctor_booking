import { FaDiagnoses } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

function AboutFooter() {
  return (
    <div className="my-5 w-full relative mx-auto min-h-[400px] flex items-center">
      <div className="w-1/2 bg-primary h-full right-0 absolute -z-10"></div>
      <div className="w-full h-full p-5 grid gap-2 sml:grid-cols-5">
        <div className="sml:col-span-2 flex flex-col gap-3 text-start">
          <p className="text-green_color text-sm font-semibold">| Services</p>
          <h1 className="text-2xl sml:text-4xl text-primary tracking-wider font-bold">
            We Provides Best <br /> Services in Hospital
          </h1>
          <p className="text-xs text-text_gray max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque
            deleniti quod, aut id nesciunt incidunt neque sequi. Saepe eum ipsa
            reiciendis illum et impedit soluta provident ipsum? Voluptate,
            beatae.
          </p>
        </div>
        <div className="col-span-1 bg-bg_white_gray flex flex-col gap-3 items-center p-2">
          <FaDiagnoses className="text-4xl text-primary" />
          <p className="font-bold text-center text-lg sml:text-xl text-primary">
            Diagnosis
          </p>
          <p className="text-xs text-balance text-text_gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            sit dolores repellat dignissimos dolorum, architecto ad esse
          </p>
        </div>
        <div className="col-span-1 bg-bg_white_gray flex flex-col gap-3 items-center p-2">
          <GiMedicines className="text-4xl text-primary" />
          <p className="font-bold text-center text-lg sml:text-xl text-primary">
            Medicine
          </p>
          <p className="text-xs text-balance text-text_gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            sit dolores repellat dignissimos dolorum, architecto ad esse
          </p>
        </div>
        <div className="col-span-1 bg-bg_white_gray flex flex-col gap-3 items-center p-2">
          <FaUserDoctor className="text-4xl text-primary" />
          <p className="font-bold text-center text-lg sml:text-xl text-primary">
            Expert Doctor
          </p>
          <p className="text-xs text-balance text-text_gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            sit dolores repellat dignissimos dolorum, architecto ad esse
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutFooter;
