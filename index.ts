import { Product } from "./db/product";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/products", async (req, res) => {
  const allProducts = await Product.findAll();
  res.json(allProducts);
});

app.post("/product", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.json(product);
});

app.patch("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  await product.update(req.body);
  res.json(product);
});
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  await product.destroy();
  res.json(product);
});
app.listen(port, () => {
  console.log("Todo esta Ok");
});
/*
Servidor de API RESTful que utiliza
Express y Sequelize para interactuar 
con una base de datos. 
Define rutas para operaciones CRUD 
(Crear, Leer, Actualizar, Borrar) 
en la entidad "Product". 
Las rutas son /products para obtener todos los productos, 
/product para crear un nuevo producto, 
/product/:id para obtener, actualizar y borrar un producto específico por su ID.
 El servidor se inicia en el puerto 3000 o en el puerto definido por la variable de entorno PORT.
 */
