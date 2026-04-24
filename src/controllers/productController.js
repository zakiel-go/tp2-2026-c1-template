import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../services/productService.js";

export async function getAllProducts(req, res, next) {
    try {
        const { category, brand } = req.query;
        const data = getProducts({ category, brand });
        res.json({ data });
    } catch (error) {
        next(error);
    }
}

export async function getProductByIdController(req, res, next) {
    try {
        const data = getProductById(req.params.id);
        res.json({ data });
    } catch (error) {
        next(error);
    }
}

export async function createProductController(req, res, next) {
    try {
        const data = createProduct(req.body);
        res.status(201).json({ message: "Producto creado", data });
    } catch (error) {
        next(error);
    }
}

export async function updateProductController(req, res, next) {
    try {
        const data = updateProduct(req.params.id, req.body);
        res.json({ message: "Producto actualizado", data });
    } catch (error) {
        next(error);
    }
}

export async function deleteProductController(req, res, next) {
    try {
        deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
