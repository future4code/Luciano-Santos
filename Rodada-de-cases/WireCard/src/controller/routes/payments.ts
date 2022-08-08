import express from "express";
import { PaymentController } from "../PaymentController";

const paymentController = new PaymentController();

export const paymentRoutes = express.Router(); 

paymentRoutes.post("/", paymentController.createPayment);