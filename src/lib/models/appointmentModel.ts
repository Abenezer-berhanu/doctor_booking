// @ts-ignore
import mongoose from "mongoose";

const appointmentModel = new mongoose.Schema(
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
      enum: ["male", "female"],
      required: true,
      default: "male",
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

export default mongoose.models?.Appointment || mongoose.model('Appointment', appointmentModel)

