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

function CheckupAppointmentTable({
  appointments,
}: {
  appointments: appointment[];
}) {
  return (
    <Table>
      <TableCaption>A list of your recent checkup appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>checkup Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Specialist</TableHead>
          <TableHead className="text-right">Created Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointments.length > 0 &&
          appointments.map((appointment: any) => (
            <TableRow key={appointment?._id} className="text-sm font-semibold">
              <TableCell className="font-medium">{appointment?.name}</TableCell>
              <TableCell>
                {formatDistanceToNow(new Date(appointment?.date), {
                  addSuffix: true,
                })}
              </TableCell>
              <TableCell>
                <p className="w-fit bg-yellow-300 px-2 rounded-md font-semibold">
                  waiting...
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

export default CheckupAppointmentTable;
