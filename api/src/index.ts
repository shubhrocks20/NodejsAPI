import express from "express";
import { productsRoutes } from "./routes/products";

const port = 3000;
const app = express();

app.use("/products", productsRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
