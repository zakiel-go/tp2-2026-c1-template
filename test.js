import "dotenv/config";

import { findAllUsers, findUserById, registerUser } from "./src/data/userData.js";

import { connectToDatabase } from "./src/data/connection.js";

await connectToDatabase();
// const users =  await findAllUsers();
// console.log(users);

// const user = await findUserById("651a1b8d2cb6c18b2d90f1c4");
// console.log(user);

const user = {name: "Test2104", email: "Test2104@gmail.com", password: "123456"};

const result = await registerUser(user);

console.log(result);