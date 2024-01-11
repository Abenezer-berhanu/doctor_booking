import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <Alert className="text-center">
        <Image src={'/notFoundEmoji.png'} alt="not-found" width={500} height={500} className="w-full max-w-[500px] mx-auto"/>
      <AlertTitle className="text-3xl font-bold">Page Not Found👀</AlertTitle>
      <AlertDescription>
        Page Not Found Please navigate to{" "}
        <Link href={"/"} className="text-base font-semibold text-primary underline">
          Home
        </Link>
        .
      </AlertDescription>
    </Alert>
  );
}

export default page;
