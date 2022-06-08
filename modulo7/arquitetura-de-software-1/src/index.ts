import { app } from "./controller/app";
import { CreateUserController } from "./controller/CreateUserController";
import { GetAllUsersController } from "./controller/GetAllUsersController";

const userController = new CreateUserController();
const getAllUsers = new GetAllUsersController();

app.post('/user', userController.createUser);
app.get('/all', getAllUsers.getAllUsers);

