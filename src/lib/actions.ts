"use server";
import { redirect } from "next/navigation";
import connectDB from "./config";
import appointmentModel from "./models/appointmentModel";
import { revalidatePath } from "next/cache";
import { appointment } from "./types";
import checkupAppointmentModel from "./models/checkupAppointmentModel";

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
    //@ts-ignore
    birthDate: new Date(birthDate),
    city,
    region,
    postalCode,
    country,
    email,
    gender,
    specialist,
    symptom,
  };

  try {
    await connectDB();
    const newAppointment = new appointmentModel(obj);
    const savedAppointment = await newAppointment.save();
    return savedAppointment;
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/myAppointments");
    redirect("/appointments");
  }
};

export const checkupAppointment = async (
  currentState: any,
  appointments: FormData
) => {
  const { name, date, specialist } = Object.fromEntries(appointments);
  const obj = {
    name,
    //@ts-ignore
    date: new Date(date),
    specialist,
  };
  try {
    await connectDB();
    const newAppointment = new checkupAppointmentModel(obj);
    await newAppointment.save();
    return { success: "Checkup Appointment registered Successfully!" };
  } catch (error) {
    console.log(error);
  } 
};
