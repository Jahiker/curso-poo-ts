import axios from "axios";

import { Product } from "./models/product.model";

async function getProducts(): Promise<Product[]> {
  // Tipado de la libreria que soporta TS
  const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products");

  // Si la libreria no soporta el tipado
  // const rta = await axios.get("https://api.escuelajs.co/api/v1/products");
  // const data = rta.data as Product[];

  return data;
}

const products = await getProducts()
console.log(products.map(product => `${product.id} - ${product.title}`));

// (async () => {
// })();
