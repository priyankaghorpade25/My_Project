// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { renderBlogForm, renderBlogs } from "./src/controllers/blog.controller.js";
import { addBlog } from "./src/controllers/blog.controller.js";


const app = express();
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.get('/createBlog',renderBlogForm);
app.get("/",renderBlogs);
app.post("/addblog",addBlog);

export default app;
