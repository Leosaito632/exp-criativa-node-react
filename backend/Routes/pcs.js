import express from "express";
import {
  getPcs,
  removePc,
  createPc,
  editPc,
} from "../Controllers/pcs.js";

const router = express.Router();
router.delete("/remover_computer", removePc);
router.put("/criar_computer", createPc);
router.post("/editar_computer", editPc);
router.get("/", getPcs);

export default router;
