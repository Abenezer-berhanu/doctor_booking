"use client";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { specialists } from "@/lib/datas";
import { checkupAppointment } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Loader from "../Spinner/Loader";

function CheckupAppointmentForm() {
  const formRef = useRef();
  const { push } = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  //@ts-ignore
  const [state, formAction] = useFormState<any>(checkupAppointment, null);
  useEffect(() => {
    if (state?.success) {
      toast({
        title: `✅${state?.success}`,
      });
      //@ts-ignore
      formRef.current.reset();
      setLoading(false);
      push("/checkupAppointments");
    }
  }, [state]);
  return (
    <form
      //@ts-ignore
      ref={formRef}
      action={formAction}
      className="grid grid-cols-1 sml:grid-cols-4 gap-2 max-sml:gap-5 relative"
    >
      {loading && <Loader />}
      <span className="flex flex-col">
        <label htmlFor="name" className="text-black text-sm mb-2 font-semibold">
          Name:
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="name"
          className="border py-2 rounded-md indent-3 h-10 outline-none"
        />
      </span>
      <span className="flex flex-col">
        <label htmlFor="date" className="text-black text-sm mb-2 font-semibold">
          Appointment Date:
        </label>
        <input
          type="date"
          required
          name="date"
          id="date"
          placeholder="date"
          className="border py-2 rounded-md px-2 h-10 outline-none"
        />
      </span>
      <span className="flex flex-col">
        <label htmlFor="date" className="text-black text-sm mb-2 font-semibold">
          Specialist:
        </label>
        <select
          name="specialist"
          required
          className="h-10 outline-none rounded-md"
        >
          <option value="">Select Specialist</option>
          {specialists.map((specialist: string, id: number) => (
            <option value={specialist} key={id} className="h-10">
              {specialist}
            </option>
          ))}
        </select>
      </span>
      <span className="flex flex-col">
        <label htmlFor="date" className="text-transparent text-sm">
          Specialist:
        </label>
        <Button
          className="bg-primary rounded-3xl"
          type="submit"
          onClick={() => setLoading(true)}
        >
          Book Now
        </Button>
      </span>
    </form>
  );
}

export default CheckupAppointmentForm;
