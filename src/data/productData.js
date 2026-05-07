import { ObjectId } from "mongodb";
import { getDb } from "./connection.js";
import { connectToDatabase } from "./connection.js";

export async function findAllProducts({ category, brand } = {}) {
    try {
        const db = getDb();
        let collection = await db.collection("products").find().toArray();  
        return collection;
    } catch (error) {
        return null;
    }
}

export async function findProductById(id) {
    const db = getDb();
    const prod = await db.collection("products").findOne({ _id: new ObjectId(id)})
    return prod || null;
}

export async function insertProduct(product) {
    const newProduct = { ...product };
    const db = getDb();
    await db.collection("products").insertOne(newProduct);
    return newProduct;
}

export async function replaceProduct(id, product) {
    const db = getDb();
    const replacedProd = await db.collection("products").findOneAndReplace({ _id: new ObjectId(id) }, product, { returnDocument: "after" }); 
    return replacedProd;
}

export async function removeProduct(id) {
    const db = getDb();
    const resul = await db.collection("products").deleteOne({ _id: new ObjectId(id)})
    console.log(resul);
    return resul;
}
