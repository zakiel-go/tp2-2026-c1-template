import express from 'express';
import { getAllProducts, getProductByIdController, createProductController, updateProductController, deleteProductController } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductByIdController);
productRouter.post('/', createProductController);
productRouter.put('/:id', updateProductController);
productRouter.delete('/:id', deleteProductController);

export default productRouter;
