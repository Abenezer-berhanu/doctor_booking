"use server";

import { appointment } from "./types";

export const setAppointment = async (appointment: FormData) => {
  const {
    firstName,
    lastName,
    phone,
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
};
