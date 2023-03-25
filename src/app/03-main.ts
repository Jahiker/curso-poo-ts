import { ProductHttpService } from "./services/product-http.service";

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log("---".repeat(10));
    console.log("getAll");
    const products = await productService.getAll();
    console.log("🚀 ~ file: 03-main.ts:9 ~ product:", products);

    console.log("---".repeat(10));
    console.log("update");
    const productId = products[0].id;
    await productService.update(productId, {
      price: 200,
    });

    console.log("---".repeat(10));
    console.log("findOne");
    const product = await productService.findOne(productId);
    console.log("🚀 ~ file: 03-main.ts:17 ~ product:", product);
  } catch (error) {
    console.error(error);
  }
})();
