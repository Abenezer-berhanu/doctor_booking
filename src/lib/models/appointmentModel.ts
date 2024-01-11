// @ts-ignore
import mongoose from "mongoose";


const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    streetAddressLine1: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    symptom: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Appointment ||
  mongoose.model("Appointment", appointmentSchema);
