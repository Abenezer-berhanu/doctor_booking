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

function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MdAccountCircle className="text-3xl h-full"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Appointments</DropdownMenuItem>
        <DropdownMenuItem className="font-bold flex gap-1 items-center">Logout<IoMdLogOut className="text-lg"/></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
