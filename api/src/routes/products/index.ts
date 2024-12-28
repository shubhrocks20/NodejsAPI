import { Router } from "express";
import { listProducts, getProductById, deleteProduct, updateProduct, createProducts } from "./productsController";
// product endpoints
const router = Router();

router.get("/", listProducts);
router.get('/:id', getProductById)
router.post('/', createProducts);
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export const productsRoutes = router;