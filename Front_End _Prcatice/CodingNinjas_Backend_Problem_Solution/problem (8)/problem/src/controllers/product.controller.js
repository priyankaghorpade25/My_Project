// Import the necessary modules here
import ProductModel from '../models/product.model.js';


export default class ProductController {
  constructor() {
    this.productModel = new ProductModel();
}

  getProducts = (req, res) => {
    const products = this.productModel.fetchProducts();
    res.send(products); 
  };
}
