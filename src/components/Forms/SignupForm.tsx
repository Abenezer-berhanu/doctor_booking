"use client";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { registerUser } from "@/lib/actions";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import Loader from "../Spinner/Loader";
import { signIn } from "next-auth/react";

function SignupForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  //@ts-ignore
  const [state, formAction] = useFormState(registerUser, null);
  useEffect(() => {
    if (state?.success) {
      toast({
        title: `✅${state?.success}`,
      });
      setLoading(false);
      router.push("/login");
    }
    if (state?.error) {
      toast({
        title: `❌${state?.error}`,
      });
      setLoading(false);
    }
  }, [router, state]);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 w-full justify-start relative"
    >
      {loading && <Loader />}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold flex gap-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="fullname" className="font-semibold flex gap-2">
          Full Name:
        </label>
        <input
          type="fullName"
          name="fullName"
          id="fullname"
          className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-semibold flex gap-2">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword" className="font-semibold flex gap-2">
          Confirm Password:
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="py-2 indent-3 text-sm rounded-md bg-gray-100 w-full outline-none"
        />
      </div>
      <Button onClick={() => setLoading(true)} type="submit">
        Sign up
      </Button>
    </form>
  );
}

export default SignupForm;
