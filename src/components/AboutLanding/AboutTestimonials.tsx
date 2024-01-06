import { FaQuoteRight } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AboutTestimonials() {
  return (
    <div className="flex flex-col gap-2 p-4 shadow-md shadow-primary hover:shadow-lg hover:shadow-primary max-w-[300px]">
      <FaQuoteRight className="text-green_color text-lg sml:text-xl" />
      <p className="text-xs text-start text-text_gray line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam
        aliquam maiores maxime voluptas possimus laborum provident excepturi
      </p>
      <span className="w-full flex gap-1 text-sm text-yellow-300">
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
      </span>
      <div className="flex gap-3 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold text-sm">John Doe</p>
        <p className="text-xs text-text_gray text-start">california</p>
      </div>
      </div>
    </div>
  );
}

export default AboutTestimonials;
