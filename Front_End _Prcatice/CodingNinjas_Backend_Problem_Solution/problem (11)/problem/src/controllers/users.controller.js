// Please don't change the pre-written code
// Import the necessary modules here

import {userModel} from "../models/users.model.js";

export const userController = async (req, res) => {
  // constructor(){
  //   this.productModel=new ProductModel;

  // }
    console.log("hii");
    const users = await userModel(); // Make sure this returns data
    console.log(users);
    
    res.render("index", {users}) ;// 


 



 
};

