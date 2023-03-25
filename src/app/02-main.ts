import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: "Product 1",
  price: 100,
  description: "Descipcion del prooducto 1",
  categoryId: 12,
  images: []
})

const products = productService.getAll();
const productId = products[0].id;

console.log(products)

productService.update(productId, {
  description: "Esta es la descripcion modificada"
})

console.log(products)
