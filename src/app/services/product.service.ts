import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { faker } from "@faker-js/faker";

export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };

    this.add(newProduct);

    return newProduct;
  }

  add(product: Product) {
    this.products.push(product);

    return product;
  }

  updateProduct(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product["id"]) {
    return this.products.find((item) => item.id === id);
  }
}