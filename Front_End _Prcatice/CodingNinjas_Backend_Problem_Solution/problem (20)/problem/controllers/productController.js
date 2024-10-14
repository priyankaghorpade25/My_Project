// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
  //   const {name,image}=req.body;
  //   const result= productModel.searchResult(name);
  //   console.log(result);
  //   if (!result) {
  //     return res.status(404).render("noResults"); // Handle case where no results are found
  // }
  
  
  //   res.status(201).render("searchResults",{result});
  
  
  try {
    const { name } = req.body; // Extract only the name for the search
    const result =  productModel.searchResult(name); // Await the searchResult method

    console.log(result);

    // Check if results are found
    if (!result || result.length === 0) {
        return res.status(404).send("noResults"); // Handle case where no results are found
    }

    res.status(200).render("searchResults", { result }); // Use 200 for successful response
} catch (error) {
    console.error(error);
    res.status(500).render("error", { error: "An error occurred while searching." }); // Handle errors
}
  };
  };

