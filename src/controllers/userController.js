import { getUsers } from "../services/userService.js";

export async function getAllUsers(req, res) {
    try {
        res.json(getUsers());
        
    } catch (error) {
        res.json({message: "Error al obtener usuarios", error: error.message});
    }
}

export async function getUserById(req, res) {
    res.json({message: `Usuario con ID ${req.params.id}`});
}