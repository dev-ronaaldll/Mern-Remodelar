import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProducto,
  deleteProducto,
  updateProducto,
  getLastProducto,
} from "../controllers/productos.controllers.js";
const router = Router();
//TODO : limit router points 
router.get("/productos", getProductos);
router.get("/productos/last", getLastProducto);
router.get("/productos/:codprod", getProducto);
router.post("/productos", createProducto);
router.put("/productos/:codprod", updateProducto);
router.delete("/productos/:codprod", deleteProducto);
export default router;
