import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { specialists } from "@/lib/datas";
import Image from "next/image";
import Link from "next/link";
import { HiMiniLightBulb } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="w-full bg-no-repeat bg-cover h-screen bg-gradient-to-r from-cyan-400 to-blue-400 text-white flex justify-start sml:items-center relative z-10">
          <div className="bg-white h-36 w-36 rounded-full absolute mx-auto left-0 right-0 z-10 sml:top-4 max-sml:bottom-4 flex flex-col items-center justify-center p-5 text-black">
            <p className="text-primary">
              <strong className="text-5xl font-bold">95</strong>%
            </p>
            <span className="flex text-yellow-400">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </span>
            <p className="text-sm font-semibold">Positive Rating</p>
          </div>
          <div className="pt-10 px-5 sml:pl-20 z-10">
            <div className="bg-primary text-white rounded-3xl mt-5 w-fit px-5 py-3 flex items-center">
              <HiMiniLightBulb className="text-yellow-500 text-lg mr-3" />
              24/7 Emergency service
            </div>
            <p className="font-extrabold text-4xl sml:text-6xl block text-start text-pretty">
              <span className="text-primary">Genuine</span> Treatments.
            </p>
            <p className="font-extrabold text-4xl sml:text-6xl text-start flex text-primary">
              for your health
            </p>
            <p className="text-black pt-5 text-sm sml:text-base">
              Lectus vestibulum mattis uilamcorper velit sed ullamcorper. Nunc
              semper
              <br />
              handrerit gravida rutrum quisque
            </p>
            <Button
              className="bg-white text-primary rounded-3xl hover:text-white mt-5"
              asChild
            >
              <Link href={"#"}>More Detail</Link>
            </Button>
          </div>
          <div className="h-screen absolute right-0">
            <Image
              src={"/hero.png"}
              alt="Hero"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <Card className=" w-[90%] mx-auto -mt-11 z-20 px-5">
          <CardHeader>Take Appointment and save you time.</CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <span className="flex flex-col">
              <label htmlFor="name" className="text-black text-sm">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="border py-2 rounded-md indent-3 h-10 outline-none bg-text_gray focus:bg-white"
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="date" className="text-black text-sm">
                Date:
              </label>
              <input
                type="date"
                name="date"
                placeholder="date"
                className="border py-2 rounded-md indent-3 h-10 outline-none bg-text_gray focus:bg-white"
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="date" className="text-black text-sm">
                Specialist:
              </label>
              <select
                name="specialist"
                className="h-10 outline-none bg-text_gray"
              >
                <option value="">Select Specialist</option>
                {specialists.map((specialist: string, id: number) => (
                  <option value={specialist} key={id} className="h-10">
                    {specialist}
                  </option>
                ))}
              </select>
            </span>
            <span className="flex flex-col">
              <label htmlFor="date" className="text-transparent text-sm">
                Specialist:
              </label>
              <Button className="bg-primary rounded-3xl">Book Now</Button>
            </span>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
