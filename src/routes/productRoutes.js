import express from 'express';
import { getAllProductsController, getProductByIdController, createProductController, updateProductController, deleteProductController } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProductsController);
productRouter.get('/:id', getProductByIdController);
productRouter.post('/', createProductController);
productRouter.put('/:id', updateProductController);
productRouter.delete('/:id', deleteProductController);

export default productRouter;
