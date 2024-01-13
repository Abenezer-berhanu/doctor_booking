import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/lib/auth";
import Link from "next/link";
import { IoIosLock } from "react-icons/io";
import SignupForm from "@/components/Forms/SignupForm";

function page() {
  const handleSubmit = async () => {
    "use server";
    await signIn("github");
  };
  const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
  };
  const handleLogout = async () => {
    "use server";
    await signOut();
  };
  return (
    <>
      <div className="m-4 max-w-[400px] mx-auto p-4 rounded-md flex flex-col items-center justify-evenly shadow-md shadow-primary min-h-[500px]">
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold flex items-center justify-center tracking-wider">
            <IoIosLock className="text-yellow-500" /> Auth
          </span>
          <p className="text-sm font-semibold text-center">Welcome!</p>
        </div>
        <SignupForm />
        <small>
          Have an Account before?
          <Link
            href={"/login"}
            className="text-primary font-semibold hover:underline duration-150"
          >
            &nbsp;Log In
          </Link>
        </small>
      </div>
    </>
  );
}

export default page;
