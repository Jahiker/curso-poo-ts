import axios from "axios";

(async () => {

  function delay(time: number) {
    const promise = new Promise<boolean>((res) => {
      setTimeout(() => {
        res(true);
      }, time);
    })
    return promise;
  }

  function getProducts() {
    const promise = axios.get("https://api.escuelajs.co/api/v1/products");
    return promise;
  }

  async function getProductsAsync() {
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products");
    return promise;
  }

  const rta = await delay(3000);
  console.log(rta)

  const products = await getProducts()
  console.log(products.data)

  const productsAsync = await getProductsAsync()
  console.log(productsAsync.data)
})();
