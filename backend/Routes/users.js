import express from "express";
import {
  getUsers,
  removeUser,
  createUser,
  editUser,
} from "../Controllers/users.js";

const router = express.Router();
router.delete("/remover_usuario", removeUser);
router.put("/criar_usuario", createUser);
router.post("/editar_usuario", editUser);
router.get("/", getUsers);

export default router;
