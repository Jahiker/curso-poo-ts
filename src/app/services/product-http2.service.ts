import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService extends BaseHttpService<Product> {
  otherRequest() {
    console.log(this.url)
  }
}

const Prod = new ProductHttpService("https://google.com")
Prod.otherRequest()
