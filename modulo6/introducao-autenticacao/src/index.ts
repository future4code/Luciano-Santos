import app from "./controller/app";
import { userRouter } from "./controller/routers/userRouter";


app.use('/user/', userRouter);
