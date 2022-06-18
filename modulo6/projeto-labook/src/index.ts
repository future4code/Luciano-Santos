import { app } from "../src/controller/app";
import { userRouter } from "./controller/routes/userRouter";
import { postRouter } from "./controller/routes/postRouter";
import { friendshipRouter } from "./controller/routes/FriendshipRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/friendship", friendshipRouter);