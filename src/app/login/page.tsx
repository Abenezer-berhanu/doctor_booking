import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/lib/auth";
import Link from "next/link";
import { IoIosLock } from "react-icons/io";

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
      {/* <form action={handleSubmit}>
        <Button>login</Button>
      </form>
      <form action={handleGoogleLogin}>
        <Button>login with google</Button>
      </form>
      <form action={handleLogout}>
        <Button>logout</Button>
      </form> */}

      <div className="m-4 max-w-[400px] mx-auto p-4 rounded-md flex flex-col items-center justify-evenly shadow-md shadow-primary min-h-[500px]">
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold flex items-center justify-center tracking-wider">
            <IoIosLock className="text-yellow-500" /> Auth
          </span>
          <p className="text-sm font-semibold">Welcome back!</p>
        </div>
        <form action="" className="flex flex-col gap-4 w-full justify-start">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold flex gap-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-2 indent-3 text-sm rounded-md bg-gray-50 w-full outline-slate-100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold flex gap-2">
              Password
            </label>
            <input
              type="email"
              id="email"
              className="py-2 indent-3 text-sm rounded-md bg-gray-50 w-full outline-slate-100"
            />
          </div>
          <p>Forgot Password?</p>
          <Button className="">Login</Button>
        </form>
        <div className="grid grid-cols-2 gap-2">
          <form
            action=""
            className="w-full border-2 border-slate-50 flex items-center justify-center"
          ></form>
          <form
            action=""
            className="w-full border-2 border-slate-50 flex items-center justify-center"
          ></form>
        </div>
        <small>
          Don{"'"}t have an Account?<Link href={"/signup"}>Sign up</Link>
        </small>
      </div>
    </>
  );
}

export default page;
