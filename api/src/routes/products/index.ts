import { Router } from "express";

// product endpoints
const router = Router();

router.post("/", (req, res) => {
  res.send("New Product created!");
});

router.get("/", (req, res) => {
  res.send("Working 👍");
});

export const productsRoutes = router;