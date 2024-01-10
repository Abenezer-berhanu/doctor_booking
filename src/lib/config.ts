// @ts-ignore
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("connected successfully");
    });

    connection.on("error", (err: any) => {
      console.log(
        "mongodb connection error. please make sure monogdb is running." + err
      );
      process.exit();
    });
  } catch (error: any) {
    throw new Error("Error in connecting mongodb", error);
  }
};

export default connectDB;
