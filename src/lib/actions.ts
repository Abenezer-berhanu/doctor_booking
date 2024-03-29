"use server";
import { redirect } from "next/navigation";
import connectDB from "./config";
import appointmentModel from "./models/appointmentModel";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import checkupAppointmentModel from "./models/checkupAppointmentModel";
import newsLetterModel from "./models/newsLetterModel";
import userModel from "./models/userModel";
import { auth } from "./auth";
import contactUsModel from "./models/contactUsModel";

interface MedicalRecord {
  id: string;
  name: string;
  email: string;
}
export const setAppointment = async (appointment: FormData) => {
  //@ts-ignore
  const session: { user: MedicalRecord } = await auth();
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
    userId: session?.user?.id,
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
  const { name, date, specialist, id } = Object.fromEntries(appointments);
  const obj = {
    name,
    //@ts-ignore
    date: new Date(date),
    specialist,
    userId: id,
  };
  try {
    await connectDB();
    const newAppointment = new checkupAppointmentModel(obj);
    await newAppointment.save();
    return { success: "Checkup Appointment registered Successfully!" };
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/checkupAppointment");
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

export const getMyAppointments = async (id: string) => {
  try {
    await connectDB();
    const myAppointments = await appointmentModel.find({ userId: id }).lean();
    return myAppointments;
  } catch (error) {
    console.log(error);
  }
};

export const getMyCheckupAppointments = async (id: string) => {
  try {
    await connectDB();
    const myCheckup = await checkupAppointmentModel.find({ userId: id }).lean();
    return myCheckup;
  } catch (error) {
    console.log(error);
  }
};

export const handleContact = async (currentState: any, formData: FormData) => {
  const { email, message }: any = Object.fromEntries(formData);
  try {
    await connectDB();
    const obj = {
      email,
      message,
    };
    const newContactUsMessage = new contactUsModel(obj);
    await newContactUsMessage.save();
    return { success: "true" };
  } catch (error) {
    console.log(error);
  }
};
