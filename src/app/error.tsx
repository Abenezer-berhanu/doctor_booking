"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";

function error() {
  return (
    <Alert className="text-center">
      <Image
        src={"/error.jpg"}
        alt="not-found"
        width={500}
        height={500}
        className="w-full max-w-[500px] mx-auto"
      />
      <AlertTitle className="text-3xl font-bold">Error has occurred</AlertTitle>
      <AlertDescription>
        Something went wrong please try again latter or navigate{" "}
        <Link
          href={"/"}
          className="text-base font-semibold text-primary underline"
        >
          Home
        </Link>
        .
      </AlertDescription>
    </Alert>
  );
}

export default error;
