import express from "express";
import { getAllProducts, getProductById, createProduct, updateProduct } from "../controllers/productController.js";

const productRouters = express.Router();

productRouters.get('/', getAllProducts);
productRouters.get('/:id', getProductById);

productRouters.post('/', createProduct);
productRouters.put('/:id', updateProduct);

export default productRouters;