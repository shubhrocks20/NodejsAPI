import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/schema";
import { eq } from "drizzle-orm";
export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
}
export async function getProductById(req: Request, res: Response) {
  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(req.params.id)));
    if (!product) res.status(404).json({ message: "Product not found!" });
    else res.json(product);
  } catch (err) {
    res.status(500).send(err);
  }
}
export async function createProducts(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).send(err);
  }
}
export async function updateProduct(req: Request, res: Response) {
  try {
    const updatedFields = req.body;

    const [updatedProduct] = await db.update(productsTable).set(updatedFields).where(eq(productsTable.id, Number(req.params.id))).returning()
    if(updatedProduct) {res.json(updatedProduct)}
    else {res.status(404).json({message: 'Product was not found1'})}

  } catch (err) {
    res.status(500).send(err);
  }
 
}
export async function deleteProduct(req: Request, res: Response) {
  try {
    const [deletedItem] = await db.delete(productsTable).where(eq(productsTable.id, Number(req.params.id))).returning();

    if(deletedItem) {res.status(204).send()}
    else {res.status(404).json({message: 'Product was not found1'})}
  } catch (err) {
    res.status(500).send(err);
  }
  
}
