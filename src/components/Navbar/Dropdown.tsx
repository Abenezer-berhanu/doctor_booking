"use client";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MdAccountCircle className="text-3xl h-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/TreatmentAppointments"}>Treatment Appointments</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/checkupAppointments"}>Checkup Appointments</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-bold flex gap-1 items-center">
          Logout
          <IoMdLogOut className="text-lg" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
