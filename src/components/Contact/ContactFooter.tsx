import { IoLocation } from "react-icons/io5";
import { IoIosAlarm } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { ContactInfos } from "@/lib/types";

function ContactFooter({ contact }: { contact: ContactInfos }) {
  return (
    <div className="rounded-md p-8 text-white relative z-20 flex flex-col bg-primary">
      <div className="absolute w-16 h-16 rounded-full right-2 top-2 bg-text_gray bg-opacity-20 z-10"></div>
      <div className="absolute w-12 h-12 rounded-full m-auto top-0 bottom-0 left-0 right-0 bg-text_gray bg-opacity-20 z-10"></div>
      <div className="absolute w-10 h-10 rounded-full left-2 bottom-2 bg-text_gray bg-opacity-20 z-10"></div>
      <div className="z-30 flex flex-col gap-2">
        <span className="flex gap-2 items-center font-semibold text-base">
          {contact.icon === "FaPhoneAlt" ? (
            <FaPhoneAlt className="text-xl" />
          ) : contact.icon === "IoLocation" ? (
            <IoLocation className="text-xl" />
          ) : contact.icon === "IoIosAlarm" ? (
            <IoIosAlarm className="text-xl" />
          ) : (
            ""
          )}{" "}
          <p>{contact.label}</p>
        </span>
        {contact.address && <small>{contact.address}</small>}
        {contact.address2 && <small>{contact.address2}</small>}
      </div>
    </div>
  );
}

export default ContactFooter;
