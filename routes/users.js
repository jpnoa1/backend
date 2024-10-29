import express from "express";
import db from "../db/config.js";
import { ObjectId } from "mongodb";
const router = express.Router();

// Exemplo de rota para retornar uma lista de utilizadores
router.get("/", (req, res) => {
  res.send([{ name: "John Doe" }, { name: "Jane Doe" }]).status(200);
});

export default router;
