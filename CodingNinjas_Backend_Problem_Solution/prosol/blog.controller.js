// Please don't change the pre-written code

// export const validateBlog = (req, res,next) => {
//   // Write your code here
//   let errors=[];
//   const {title,description,img}=req.body;
//   console.log(req.body);
//   if(title.length<3 || title.trim()==''){
//     errors.push("Enter a valid title");
//   }
//   if(description.length<10 || description.trim()==''){
//     errors.push("Description should be greater than 10 character")
//   }
//   try {
//       const validUrl =new URL(img);
//   } catch (error) {
//       errors.push('please Enter a Valid Url!')
//   }
//   if (errors.length > 0) {
//     return res.render("addBlog", { errors, success: false });
//   }

//   // If validation passes
//   res.status(201).render("addBlog", { errors: null, success: true });
//   next();


  export const validateBlog = (req, res) => {
    const { title, description, image } = req.body;
    title.trim();
    description.trim();
    image.trim();
    const errors = [];
    try {
      new URL(image);
    } catch (err) {
      errors.push("The image URL provided should be a valid URL");
    }
    if (!title) {
      errors.push("The title field should not be empty");
    }
    if (title.length < 3) {
      errors.push("The title field should contain at least 3 characters");
    }
    if (!description) {
      errors.push("The description field should not be empty");
    }
    if (description.length < 10) {
      errors.push("The description field should contain at least 10 characters");
    }
    if (errors.length > 0) {
      res.status(401).render("addBlog", { errors, success: false });
    }
    res.status(201).render("addBlog", { errors: null, success: true });
  };
  
 
    // const { name, mobile } = req.body;
    // const errors = {};
    // if (name == null || name.length < 5) {
    //   errors.name = "enter valid name of length greater than 4";
    // }
    // if (mobile === null || mobile.length < 10) {
    //   errors.mobile = "enter valid mobile number of 10 digits";
    // }
    // console.log(errors);
    // if (errors.name || errors.mobile) {
    //   res.status(401).send(errors);
    // }
    // next();
  
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
