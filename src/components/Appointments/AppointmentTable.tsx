"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { appointment } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

function AppointmentTable({ appointments }: { appointments: appointment[] }) {
    console.log(appointments)
  return (
    <Table>
      <TableCaption>A list of your recent appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Full Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Specialist</TableHead>
          <TableHead className="text-right">Created Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.length > 0 &&
          appointments.map((appointment: any) => (
            <TableRow key={appointment?._id} className="text-sm font-semibold">
              <TableCell className="font-medium">
                {appointment?.firstName}
                &nbsp;
                {appointment?.lastName}
              </TableCell>
              <TableCell>{appointment?.phone}</TableCell>
              <TableCell>
                <p className="w-fit bg-green_color px-2 rounded-md font-semibold">
                  open
                </p>
              </TableCell>
              <TableCell>{appointment?.specialist}</TableCell>
              <TableCell className="text-right">
                {formatDistanceToNow(new Date(appointment?.createdAt), {
                  addSuffix: true,
                })}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default AppointmentTable;
