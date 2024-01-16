import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    email: {
      type: "string",
      required: true,
    },
    message: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
