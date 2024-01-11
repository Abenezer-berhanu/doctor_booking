"use server";
import { redirect } from "next/navigation";
import connectDB from "./config";
import appointmentModel from "./models/appointmentModel";
import { revalidatePath } from "next/cache";

export const setAppointment = async (appointment: FormData) => {
  const {
    firstName,
    lastName,
    phone,
    birthDate,
    streetAddress,
    streetAddressLine1,
    city,
    region,
    postalCode,
    country,
    email,
    gender,
    specialist,
    symptom,
  } = Object.fromEntries(appointment);
  const obj = {
    firstName,
    lastName,
    phone,
    streetAddress,
    streetAddressLine1,
    birthDate,
    city,
    region,
    postalCode,
    country,
    email,
    gender,
    specialist,
    symptom,
  };
  console.log(obj)
  try {
    // await connectDB(); 
    // const newAppointment = new appointmentModel(obj);
    // const savedAppointment = await newAppointment.save();
    // return savedAppointment;
  } catch (error) {
    console.log(error);
  } finally {
    // revalidatePath("/myAppointments");
    // redirect("/appointments");
  }
};
