import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getByName } from "./endpoints/getByName";
import { getByType } from "./endpoints/getByType";

app.get("/users", getAllUsers);
app.get("/users/name", getByName);
app.get("/users/:type", getByType);