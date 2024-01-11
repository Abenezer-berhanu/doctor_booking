import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

function loading() {
  return (
    <div className="w-full h-full absolute">
      <Image src={"/loading.gif"} alt="loading" fill priority />
    </div>
  );
}

export default loading;
