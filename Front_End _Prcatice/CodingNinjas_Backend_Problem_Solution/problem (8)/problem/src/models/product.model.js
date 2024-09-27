// Import the necessary modules here
import {products as productsData } from "../assets/products.js";


export default class ProductModel {
  fetchProducts = () => {
    return productsData;
   
  };
}
