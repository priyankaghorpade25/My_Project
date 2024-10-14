// Please don't change the pre-written code
// Import the necessary modules here
import {blogs} from "../models/blog.model.js"

export const renderBlogs = (req,res) => {
 res.render('blogs',{blogs})
};
export const renderBlogForm = (req,res) => {
  // Write your code here
  res.render('addBlogForm',{title:"Add Blog"});
  
};
export const addBlog = (req,res) => {
  
  
  blogs.push(req.body);
   res.status(201).render("blogs",{blogs});
  
};
