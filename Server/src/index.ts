import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRouter } from "./routes/userRouter";

const app = express();

app.use(express.json());
app.use(cors());
config();

app.use("/compiler", compilerRouter);
app.use("/auth",userRouter);

dbConnect();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
