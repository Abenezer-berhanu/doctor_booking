import ContactFooter from "@/components/Contact/ContactFooter";
import ContactHeader from "@/components/Contact/ContactHeader";
import { ContactInfos } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information",
};

const contactData = [
  {
    id: 1,
    label: "Call Us",
    icon: "FaPhoneAlt",
    address: "1(234) 567-789",
    address2: "1(234) 567-789",
  },
  {
    id: 2,
    label: "Location",
    icon: "IoLocation",
    address: "121 Rock Street, 21 Avenue, New York, NY, USA 92103-9000",
  },
  {
    id: 3,
    label: "hours",
    icon: "IoIosAlarm",
    address: "24/7 Available",
  },
];

function page() {
  return (
    <div>
      <ContactHeader />
      <h2 className="font-bold text-4xl text-primary text-center underline">
        Information for our Customers
      </h2>
      <div className="grid grid-cols-3 gap-3 max-w-[1000px] mx-auto p-2 m-20">
        {contactData.map((contact: ContactInfos) => (
          <ContactFooter contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}

export default page;
