import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI no definida en .env");

const products = [
    { name: "Notebook Lenovo Ideapad 3", brand: "Lenovo", category: "notebook", price: 850000, stock: 5 },
    { name: "Notebook HP Pavilion 15", brand: "HP", category: "notebook", price: 920000, stock: 3 },
    { name: "Monitor Samsung 24 FHD", brand: "Samsung", category: "monitor", price: 220000, stock: 12 },
    { name: "Monitor LG UltraGear 27", brand: "LG", category: "monitor", price: 360000, stock: 7 },
    { name: "Teclado Logitech K120", brand: "Logitech", category: "teclado", price: 18000, stock: 40 },
    { name: "Teclado Redragon Kumara", brand: "Redragon", category: "teclado", price: 55000, stock: 15 },
    { name: "Mouse Logitech M90", brand: "Logitech", category: "mouse", price: 9000, stock: 60 },
    { name: "Mouse Razer DeathAdder", brand: "Razer", category: "mouse", price: 75000, stock: 10 },
    { name: "Placa de Video GTX 1660 Super", brand: "Nvidia", category: "gpu", price: 480000, stock: 4 },
    { name: "Placa de Video RTX 4060", brand: "Nvidia", category: "gpu", price: 950000, stock: 2 },
    { name: "Memoria RAM Kingston 16GB DDR4", brand: "Kingston", category: "ram", price: 65000, stock: 25 },
    { name: "SSD Samsung 970 EVO 1TB", brand: "Samsung", category: "almacenamiento", price: 140000, stock: 18 }
];

async function seed() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("✅ Conectado a MongoDB");

        const db = client.db("sample_tp2");
        const collection = db.collection("products");

        await collection.deleteMany({});
        console.log("🗑️  Colección 'products' limpiada");

        const result = await collection.insertMany(products);
        console.log(`✅ ${result.insertedCount} productos insertados en 'sample_tp2.products'`);
    } catch (error) {
        console.error("❌ Error en seed:", error.message);
        process.exit(1);
    } finally {
        await client.close();
    }
}

seed();
