import Image from "next/image";
import ContactForm from "./ContactForm";
import { handleContact } from "@/lib/actions";

function ContactHeader() {
  return (
    <div className="grid sml:grid-cols-4 gap-5 py-10">
      <div className="sml:col-span-2 max-w-[700px] h-full">
        <Image
          src={"/contact_hero.png"}
          alt="contact_hero"
          width={500}
          height={500}
          priority
          className=" h-full object-cover rounded-r-full w-full"
        />
      </div>
      <div className="sml:col-span-2 px-5">
        <h1 className="font-bold text-4xl text-primary mb-5">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactHeader;
