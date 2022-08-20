import 'express-async-errors';
import { NextFunction, Request, Response } from "express";
import app from "./controller/app";
import { productRoutes } from "./controller/routes/productRoutes";

app.use("/produto", productRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction ) => {
    res.status(err.status).send(err.message);
});