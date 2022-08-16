import express from "express";
import { ProductController } from "../ProductController";

export const productRoutes = express.Router(); 

const productController = new ProductController();

productRoutes.post("/", productController.createProduct);
