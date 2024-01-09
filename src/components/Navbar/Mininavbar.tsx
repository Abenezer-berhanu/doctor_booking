import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa6";

function Mininavbar() {
  return (
    <div className="w-full border-b border-primary h-8 flex px-4 sml:px-0 justify-between sml:justify-around font-xs text-text_gray">
      {" "}
      <Link
        href="mailto:abenuberhanu271@gmail.com"
        className="flex gap-1 items-center max-sml:text-xs"
      >
        <AiTwotoneMail className="font-lg text-primary" />
        example@gmail.com
      </Link>
      <span className="flex">
        <Link
          href={
            "https://www.facebook.com/people/Abenezer-Berhanu/pfbid0CQDYEmtYwib98vTmPA8QeCTR6Hqjhzd6pe5W7fH4KLJXTWocZYb7VavTPxuuRNval/"
          }
          target="_black"
          className="text-primary p-2 flex justify-center items-center h-full  border"
        >
          <CiFacebook className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={`https://twitter.com/AbenuB65681`}
          target="_black"
          className="text-primary p-2 flex justify-center items-center h-full  border"
        >
          <CiTwitter className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={`https://web.telegram.org/k/#@Hackhob`}
          target="_black"
          className="text-primary p-2 flex justify-center items-center h-full  border"
        >
          <FaTelegram className="text-lg max-sml:text-sm" />
        </Link>
        <Link
          href={"www.linkedin.com/in/abenezer-berhanu"}
          target="_blank"
          className="text-primary p-2 flex justify-center items-center h-full  border"
        >
          <CiLinkedin className="text-lg max-sml:text-sm" />
        </Link>
      </span>
    </div>
  );
}

export default Mininavbar;
