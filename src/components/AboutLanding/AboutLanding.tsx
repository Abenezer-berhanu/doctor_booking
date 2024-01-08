import React from 'react'
import { Button } from '../ui/button'

function AboutLanding() {
  return (
    <>
    <div className="w-full h-screen bg-black absolute -z-10">
        <video
          src="/doctorVideo.mp4"
          autoPlay
          controls={false}
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="w-full h-screen flex flex-col justify-center gap-4 leading-10">
        <h1 className="text-5xl font-bold text-center text-white flex flex-col gap-2">
          Take Care of Your Body And,<br /> It Will Take care of You.
        </h1>
        <p className="text-sm text-white text-center max-w-[500px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia
          enim illum, voluptate quibusdam quam incidunt saepe, dolores eos fuga
          eius corporis minus eaque veniam inventore expedita. Officia, dolorum
          fuga!
        </p>
        <div className="flex justify-center gap-2">
        <Button className="w-fit">Contact My Doctor</Button>
        <Button className="w-fit" variant={"outline"}>Register to DocTreat</Button>
        </div>
      </div>
      </>
  )
}

export default AboutLanding