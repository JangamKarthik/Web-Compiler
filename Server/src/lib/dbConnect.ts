import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, { dbName: "Web-Compiler" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error connecting to database");
  }
};
