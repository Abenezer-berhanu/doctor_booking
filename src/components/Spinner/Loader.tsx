"use client";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="absolute z-50 w-full h-screen flex justify-center items-center text-6xl">
      <InfinitySpin
        // @ts-ignore
        visible={true}
        color="#2563EB"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loader;
