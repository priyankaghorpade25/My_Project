// Please don't change the pre-written code
// Import the necessary modules here


import  ProductModel from "../models/product.model.js"
export default class ProductController {
  constructor(){
    this.productModel=new ProductModel;
  }
  getProducts = (req, res) => {
    const Products = this.productModel.fetchProducts(); // Make sure this returns data
    console.log(Products);
    //res.send(Products);
    res.render("product", {product:Products}) ;// second product variable which we need in ejs file Products is actual data first product is ejs file in views
    
  };
}
