import { countries, specialists } from "@/lib/datas";
import React from "react";

function page() {
  return (
    <div className="max-w-[700px] mx-auto">
      <h1 className="text-3xl sml:text-4xl text-center text-primary font-semibold">
        Take Appointment
      </h1>

      <form action={""} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Name<span className="text-red-500">*</span>
          </label>
          <span className="w-full flex gap-3">
            <input
              type="text"
              name="name"
              placeholder="Enter First Name"
              className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter Last Name"
              className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black"
            />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-semibold">
            Birth Date<span className="text-red-500">*</span>
          </label>
          <span className="w-full flex gap-3">
            <input
              type="date"
              name="date"
              placeholder="Enter birth Date"
              className="w-full outline-none border-b-2 border-black text-black px-2"
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
              placeholder="### ### ### ###"
              className="w-full outline-none border-b-2 border-black indent-3 text-black"
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
              placeholder="street address"
              className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black"
            />
            <input
              type="text"
              name="streetAddressLine2"
              placeholder="street address line 2"
              className="w-full sml:w-1/2 outline-none border-b-2 border-black indent-3 text-black"
            />
          </span>
          <span className="w-full flex gap-3 mt-3">
            <input
              type="text"
              name="city"
              placeholder="City Name"
              className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black"
            />
            <input
              type="text"
              name="Region"
              placeholder="Region Name"
              className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="w-full sml:w-1/4 outline-none border-b-2 border-black indent-3 text-black"
            />
            <select
              name="country"
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
              placeholder="johnDoe@example"
              className="w-full outline-none border-b-2 border-black indent-3 text-black"
            />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Gender<span className="text-red-500">*</span>
          </label>
          <span className="w-full flex gap-3">
            <span className="flex gap-3 items-center justify-center">
              <label htmlFor="male" className="font-semibold">
                Male
              </label>
              <input type="radio" name="gender" id="male" />
            </span>

            <span className="flex gap-3 items-center justify-center">
              <label htmlFor="female" className="font-semibold">
                Female
              </label>
              <input type="radio" name="gender" id="female" />
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="specialist" className="font-semibold">
            Specialst<span className="text-red-500">*</span>
          </label>
          <select name="specialist" className="px-2 border-b-2 border-black">
            <option value="">choose specialist</option>
            {specialists.map((specialist: string, id: number) => (
              <option value={specialist} key={id} className="h-10">
                {specialist}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default page;
