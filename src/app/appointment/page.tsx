import Loader from "@/components/Spinner/Loader";
import { Button } from "@/components/ui/button";
import { setAppointment } from "@/lib/actions";
import { countries, specialists } from "@/lib/datas";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "appointment",
  description: "set an appointment to get Medical Treatment",
};

function page() {
  return (
    <div className="max-w-[700px] mx-auto pb-40 relative">
      <h1 className="text-3xl sml:text-4xl text-center text-primary font-bold my-3">
        Take Appointment
      </h1>
      <Suspense fallback={<Loader />}>
        <form action={setAppointment} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Name<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <input
                type="text"
                name="firstName"
                required
                id="name"
                placeholder="Enter First Name"
                className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
              <input
                type="text"
                name="lastName"
                required
                id="name"
                placeholder="Enter Last Name"
                className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="font-semibold">
              Birth Date<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <input
                type="date"
                name="birthDate"
                required
                id="date"
                placeholder="Enter birth Date"
                className="w-full outline-none border-b-2 border-black text-black px-2 dark:text-white py-1"
              />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">
              Phone<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <input
                type="text"
                name="phone"
                required
                id="phone"
                placeholder="### ### ### ###"
                className="w-full outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-semibold">
              Address<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <input
                type="text"
                name="streetAddress"
                required
                id="streetAddress"
                placeholder="street address"
                className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
              <input
                type="text"
                name="streetAddressLine1"
                required
                id="streetAddressLine1"
                placeholder="street address line 2"
                className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
            </span>
            <span className="w-full flex gap-3 mt-3">
              <input
                type="text"
                name="city"
                required
                placeholder="City Name"
                className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
              <input
                type="text"
                name="region"
                required
                placeholder="Region Name"
                className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
              <input
                type="number"
                name="postalCode"
                required
                placeholder="Postal Code"
                className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
              <select
                name="country"
                required
                className="sml:w-1/4 p-2 border-b-2 border-black"
              >
                <option value="Romania">Romania</option>
                {countries.map((country: string, idx: number) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="johnDoe@example"
                className="w-full outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-semibold">
              Gender<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <span className="flex gap-3 items-center justify-center">
                <label htmlFor="male" className="font-semibold">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  required
                  id="male"
                  value={"male"}
                />
              </span>

              <span className="flex gap-3 items-center justify-center">
                <label htmlFor="female" className="font-semibold">
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  required
                  id="female"
                  value={"female"}
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="specialist" className="font-semibold">
              Specialist<span className="text-red-500">*</span>
            </label>
            <select
              name="specialist"
              required
              id="specialist"
              className="px-2 border-b-2 border-black dark:text-white py-1"
            >
              <option value="">choose specialist</option>
              {specialists.map((specialist: string, id: number) => (
                <option value={specialist} key={id} className="h-10">
                  {specialist}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="symptom" className="font-semibold">
              Symptom<span className="text-red-500">*</span>
            </label>
            <span className="w-full flex gap-3">
              <textarea
                name="symptom"
                required
                id="symptom"
                placeholder="Enter Your Symptom"
                className="w-full outline-none border-b-2 border-black indent-3 text-black dark:text-white py-1"
              />
            </span>
          </div>
          <Button className="text-white font-semibold w-fit">Submit</Button>
        </form>
      </Suspense>
    </div>
  );
}

export default page;
