import app from "./controller/app";
import { productRoutes } from "./controller/routes/productRoutes";

app.use("/product", productRoutes);