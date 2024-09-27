// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";
import searchResult from ""

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    const {name}=req.body;
    const result= productModel.searchResult(name);
    console.log(result);
    if (!result) {
      return res.status(404).render("noResults"); // Handle case where no results are found
  }
  
  
    req.status(201).render("searchResults",{result});
  };
}
