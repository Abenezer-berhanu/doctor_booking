import AppointmentTable from "@/components/Appointments/AppointmentTable";
import NoAppointmentFound from "@/components/Appointments/NoAppointmentFound";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getMyAppointments } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "checkup Appointment",
  description: "set an appointment to get Medical Treatment",
};

interface authInterface {
  id: string;
  role: boolean;
  name: string;
  email: string;
  image: string;
}

async function page() {
  //@ts-ignore
  const session: { user: authInterface } = await auth();
  const id = session?.user?.id;
  const appointment = await getMyAppointments(id);
  console.log(appointment);
  return (
    <div className="border m-5 rounded-md shadow-sm p-2 max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl text-primary font-bold">Appointments</h1>
        <Link href={"/appointment "}>
          <Button className="rounded-sm text-sm font-semibold">
            Book Appointment
          </Button>
        </Link>
      </div>
      <Separator className="my-4" />
      <div>
        {appointment ? (
          //@ts-ignore
          <AppointmentTable appointments={appointment} />
        ) : (
          <NoAppointmentFound />
        )}
      </div>
    </div>
  );
}

export default page;
