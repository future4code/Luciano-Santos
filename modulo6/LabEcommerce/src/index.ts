import { app } from "./app";
import registerNewUser from "./endpoints/registerNewUser";

app.post("/user", registerNewUser);