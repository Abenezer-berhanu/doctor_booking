//@ts-ignore
import mongoose from "mongoose";
const { Schema } = mongoose;

const checkupAppointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.CheckupAppointment ||
  mongoose.model("CheckupAppointment", checkupAppointmentSchema);
