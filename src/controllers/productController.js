import { getProducts, addNewProduct, modifyProduct } from "../services/productService.js";

export async function getAllProducts(req, res) {
    try { 
        res.json(getProducts());
    } catch (error) {
        res.json({message: "Error al obtener productos", error: error.message});
    }
}

export async function getProductById(req, res) {
    res.json({message: `Producto con ID ${req.params.id}`});
}

export async function createProduct(req, res){
    try {
        const np = addNewProduct(req.body);
        res.status(201).json({message: "Producto creado exitosamente", data: np});
    } catch (error) {
        return res.status(error.status).json({message: error.message});
    }
}

export async function updateProduct(req, res) {
    try{
        const up = modifyProduct(req.params.id, req.body);
        res.json({message: "Producto actualizado exitosamente", data: up});
    } catch (error) {
        return res.status(error.status).json({message: error.message});
    }
}
