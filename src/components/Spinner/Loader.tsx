"use client";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="absolute z-50 w-full h-screen flex justify-center items-center bg-gray-400 bg-opacity-5">
      <InfinitySpin
        // @ts-ignore
        visible={true}
        width="200"
        color="#2563EB"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loader;
