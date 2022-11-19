import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProducto,
  deleteProducto,
  updateProducto,
  getLastProducto,
  searchProductos,
} from "../controllers/productos.controllers.js";
const router = Router();
router.post("/productos/search", searchProductos);
router.get("/productos/last", getLastProducto);
router.get("/productos", getProductos);
router.get("/productos/:codprod", getProducto);
router.post("/productos", createProducto);
router.put("/productos/:codprod", updateProducto);
router.delete("/productos/:codprod", deleteProducto);
export default router;
