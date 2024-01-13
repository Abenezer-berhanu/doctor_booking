"use server";
import { redirect } from "next/navigation";
import connectDB from "./config";
import appointmentModel from "./models/appointmentModel";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import checkupAppointmentModel from "./models/checkupAppointmentModel";
import newsLetterModel from "./models/newsLetterModel";
import userModel from "./models/userModel";

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

export const addNewsletter = async (currentState: any, formData: FormData) => {
  const email = formData.get("email");
  try {
    await connectDB();
    const existNewsletterEmail = await newsLetterModel
      .findOne({ email })
      .lean();
    if (existNewsletterEmail) {
      return { error: "Newsletter email already exists" };
    } else {
      const obj = { email };
      const newNewsletter = new newsLetterModel(obj);
      await newNewsletter.save();
      return {
        success:
          "You have successfully Joined our newsletter, thanks for signing",
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (currentState: any, formData: FormData) => {
  const { email, password, fullName, confirmPassword } =
    Object.fromEntries(formData);
  if (!email || !password || !fullName) {
    return { error: "All fields are required" };
  }
  if (password !== confirmPassword) {
    return { error: "Password don't match" };
  }
  try {
    await connectDB();
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return { error: "User already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    //@ts-ignore
    const hashedPassword = await bcrypt.hash(password, salt);
    const obj = {
      email,
      fullName,
      password: hashedPassword,
    };
    const user = new userModel(obj);
    await user.save();
    return { success: "user successfully registered please login" };
  } catch (error: any) {
    console.log(error);
    throw new Error("");
  }
};
