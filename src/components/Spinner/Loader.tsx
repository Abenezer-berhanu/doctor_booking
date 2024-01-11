"use client";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="absolute z-50 w-full left-0 top-0 flex justify-center items-center bg-gray-500 bg-opacity-10">
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
