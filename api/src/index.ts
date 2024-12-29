import express, { json, urlencoded } from "express";
import { productsRoutes } from "./routes/products";

const port = 3000;
const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use("/products", productsRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// at 1.05 and later need to setup drizzle
