"use client";
import { FallingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="absolute z-50 h-full w-full left-0 top-0 flex justify-center items-center bg-gray-500 bg-opacity-10">
      <FallingLines
        color="#4fa94d"
        width="200"
        visible={true}
        //@ts-ignore
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
}

export default Loader;
