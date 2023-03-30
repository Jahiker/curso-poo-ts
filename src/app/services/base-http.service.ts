import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";
import axios from "axios";

export class BaseHttpService<TypeClass> {
  // private data: TypeClass[] = []
  constructor(protected url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();

(async () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const productsService = new BaseHttpService<Product>(url);
  const products = await productsService.getAll();
  console.log("🚀 ~ file: base-http.service.ts:26 ~ products:", products);
  productsService.update<Product['id'], UpdateProductDto>(products[0].id, {
    price: 5000
  })
  console.log("🚀 ~ file: base-http.service.ts:34 ~ update:", products[0]);


  const url1 = "https://api.escuelajs.co/api/v1/categories";
  const categoryService = new BaseHttpService<Category>(url1);
  const categories = await categoryService.getAll();
  console.log("🚀 ~ file: base-http.service.ts:30 ~ categories:", categories);
})();
