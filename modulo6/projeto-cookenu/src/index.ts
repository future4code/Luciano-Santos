import app from "../src/controller/app";
import { userRouter } from "./controller/routes/userRouter";

app.use("/user", userRouter);