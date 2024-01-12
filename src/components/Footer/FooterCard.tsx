"use client";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { addNewsletter } from "@/lib/actions";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import Loader from "../Spinner/Loader";

function FooterCard() {
  const { toast } = useToast();
  const formRef = useRef();
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  //@ts-ignore
  const [state, formAction] = useFormState<any>(addNewsletter, null);
  useEffect(() => {
    if (state?.success) {
      toast({
        title: `✅${state?.success}`,
      });
    }
    if (state?.error) {
      toast({
        title: `❌${state?.error}`,
      });
    }
    //@ts-ignore
    formRef.current.reset();
    setLoading(false)
  }, [state, router]);
  return (
    <div className="w-[80%] mx-auto rounded-lg bg-primary flex max-sml:flex-col max-sml:gap-5 justify-between items-center p-5 sml:p-10 -mt-40 font-sans relative">
     {loading && <Loader />}
      <h1 className="text-xl sml:text-3xl font-bold text-center sml:text-start">
        Latest Updates Subscribers <br />
        <span className="bg-white text-primary">To Our Newsletter.</span>
      </h1>
      {/* @ts-ignore */}
      <form action={formAction} ref={formRef}>
        <input
          type="email"
          required
          name="email"
          placeholder="Enter Your mail"
          className="h-11 indent-3 text-sm text-black"
        />
        <Button className="bg-bg_black text-white font-semibold rounded-none hover:bg-bg_black hover:bg-opacity-90 h-11"
        onClick={() => setLoading(true)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FooterCard;
