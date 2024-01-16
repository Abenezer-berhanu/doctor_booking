"use client";
import { handleContact } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Loader from "../Spinner/Loader";
import Link from "next/link";
import { Button } from "../ui/button";
import React from "react";
import { useToast } from "../ui/use-toast";

function ContactForm() {
  const { toast } = useToast();
  //@ts-ignore
  const [state, formAction] = useFormState<any>(handleContact, null);
  const [inputs, setInputs] = useState<any>({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (state?.success) {
      toast({
        title: "✅message sent successfully✅",
      });
      setLoading(false);
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    //@ts-ignore
    <form className="flex flex-col gap-5 relative" action={formAction}>
      {loading && <Loader />}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-black font-semibold dark:text-white"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          //@ts-ignore
          onChange={handleChange}
          className="outline-none border-b-2 border-text_gray p-2"
          placeholder="Enter a Valid email address"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-black font-semibold dark:text-white"
        >
          Message
        </label>
        <textarea
          name="message"
          required
          onChange={handleChange}
          className="outline-none border-b-2 border-text_gray p-2"
          placeholder="Enter Your Message"
        ></textarea>
      </div>
      <Button
        onClick={() => setLoading(true)}
        disabled={!inputs.email || !inputs.message}
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
