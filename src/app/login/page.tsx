import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import React from "react";

function page() {
  const handleSubmit = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={handleSubmit}>
      <Button>login</Button>
    </form>
  );
}

export default page;
