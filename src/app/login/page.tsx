import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import { IoIosLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
async function page() {
  const handleSubmit = async () => {
    "use server";
  };
  const handleGoogleLogin = async () => {
    "use server";
    await signIn("google");
  };
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <>
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
              className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-slate-200"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold flex gap-2">
              Password
            </label>
            <input
              type="email"
              id="email"
              className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-slate-200"
            />
          </div>
          <p className="font-semibold text-sm">
            <Link href={"#"}>Forgot Password?</Link>
          </p>
          <Button className="">Log In</Button>
        </form>
        <div className="grid grid-cols-2 gap-2 w-full mt-2">
          <form
            action={handleGoogleLogin}
            className="w-full border-2 border-slate-100 flex items-center justify-center"
          >
            <Button className="w-full rounded-none bg-transparent text-black text-2xl hover:bg-transparent">
              <FcGoogle />
            </Button>
          </form>
          <form
            action={handleGithubLogin}
            className="w-full border-2 border-slate-100 flex items-center justify-center"
          >
            <Button className="w-full rounded-none bg-transparent text-black dark:text-white text-2xl hover:bg-transparent">
              <FaGithub />
            </Button>
          </form>
        </div>
        <small>
          Don{"'"}t have an Account?
          <Link
            href={"/signup"}
            className="text-primary font-semibold hover:underline duration-150"
          >
            &nbsp;Sign up
          </Link>
        </small>
      </div>
    </>
  );
}

export default page;
