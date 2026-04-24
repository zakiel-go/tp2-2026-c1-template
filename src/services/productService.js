import { findAllProducts, saveProduct, editProduct } from "../data/productData.js";

export function getProducts() {
    return findAllProducts();
}

export function addNewProduct(data) {
    const newProduct = {...data};
    if (!newProduct.name || !newProduct.brand || !newProduct.category || newProduct.price <= 0  || newProduct.stock < 0) {
        throw {status: 400, message: "Datos de producto inválidos"};
    }
    return saveProduct(newProduct);
}

export function modifyProduct(id, data) {
    const updatedProduct = {...data};
    if (!updatedProduct.name || !updatedProduct.brand || !updatedProduct.category || updatedProduct.price <= 0  || updatedProduct.stock < 0) {
        throw {status: 400, message: "Datos de producto inválidos"};
    }
    return editProduct(updatedProduct);
}