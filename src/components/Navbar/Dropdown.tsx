"use client";
import { MdAccountCircle } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth";

function Dropdown() {
  const { push } = useRouter();
  const handleLogout = async () => {
    await signOut();
    push("/login");
  };
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
          <Button className="text-xs" onClick={handleLogout}>
            Logout
            <IoMdLogOut className="text-lg" />
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
