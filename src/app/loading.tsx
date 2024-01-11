import Loader from "@/components/Spinner/Loader";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

function loading() {
  return (
    <div className="w-full h-screen absolute">
      <Loader />
    </div>
  );
}

export default loading;
