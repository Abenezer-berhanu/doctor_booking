import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

function Mininavbar() {
  return (
    <div className="w-full border-b border-button_blue h-8 flex px-4 sml:px-0 justify-between sml:justify-around font-xs text-text_gray">
      {" "}
      <Link href={"#"} className="flex gap-1 items-center max-sml:text-xs">
        <AiTwotoneMail className="font-lg text-button_blue" />
        example@gmail.com
      </Link>
      <span className="flex">
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiFacebook className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiTwitter className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiInstagram className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={"#"}
          className="text-gray-700 p-2 flex justify-center items-center h-full  border"
        >
          <CiLinkedin className="text-lg max-sml:text-sm" />
        </Link>
      </span>
    </div>
  );
}

export default Mininavbar;
