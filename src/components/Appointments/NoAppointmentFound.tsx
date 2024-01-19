"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function NoAppointmentFound() {
  return (
    <Alert className="w-full text-bold text-center py-5">
      <AlertTitle>Ooops!</AlertTitle>
      <AlertDescription>No Appointment have Got.</AlertDescription>
    </Alert>
  );
}

export default NoAppointmentFound;
