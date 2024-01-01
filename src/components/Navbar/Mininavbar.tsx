import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

function Mininavbar() {
  return (
    <div className="w-full border-b border-button_blue h-8 flex px-4 sm:px-0 justify-between sm:justify-around font-xs text-text_gray">
      {" "}
      <Link href={"#"} className="flex gap-1 items-center">
        <AiTwotoneMail className="font-lg text-button_blue" />
        example@gmail.com
      </Link>
      <span className="flex">
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiFacebook className="text-lg" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiTwitter className="text-lg" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiInstagram className="text-lg" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiLinkedin className="text-lg" />
        </Link>
      </span>
    </div>
  );
}

export default Mininavbar;
