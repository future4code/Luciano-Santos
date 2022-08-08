import app from "./controller/app";
import { paymentRoutes } from "./controller/routes/payments";

app.use("/payments", paymentRoutes);