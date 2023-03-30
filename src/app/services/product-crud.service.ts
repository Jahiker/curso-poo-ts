import { BaseHttpService } from "./base-http.service"
import { Product } from "../models/product.model"
import { UpdateProductDto } from "../dtos/product.dto"

export class ProductCrudService {
  private url  = "https://api.escuelajs.co/api/v1/products"
  private http = new BaseHttpService<Product>(this.url)

  async update(id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto)
  }
}
