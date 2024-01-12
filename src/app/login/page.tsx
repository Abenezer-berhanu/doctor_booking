import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/lib/auth";

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
      <form action={handleSubmit}>
        <Button>login</Button>
      </form>
      <form action={handleGoogleLogin}>
        <Button>login with google</Button>
      </form>
      <form action={handleLogout}>
        <Button>logout</Button>
      </form>
    </>
  );
}

export default page;
