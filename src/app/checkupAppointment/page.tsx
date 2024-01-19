import CheckupAppointmentTable from "@/components/Appointments/CheckupAppointmentsTable";
import NoAppointmentFound from "@/components/Appointments/NoAppointmentFound";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getMyCheckupAppointments } from "@/lib/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

interface MedicalRecord {
  id: string;
  name: string;
  email: string;
}

async function page() {
  //@ts-ignore
  const session: { user: MedicalRecord } = await auth();
  const checkupAppointments = await getMyCheckupAppointments(session?.user?.id);
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
        {checkupAppointments ? (
          //@ts-ignore
          <CheckupAppointmentTable appointments={checkupAppointments} />
        ) : (
          <NoAppointmentFound />
        )}
      </div>
    </div>
  );
}

export default page;
