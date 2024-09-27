// Please don't change the pre-written code
// Import the necessary modules here
import {body, validationResult} from 'express-validator'


export const formValidation = async (req, res, next) => {
  //step1 setup rule for validation
  const rules=[
    body("name").isString().withMessage("Name is required"),
    body("email").isString().withMessage("Enter a valid email"),
    body("image").isURL().withMessage("Profile image is required")
  ]
  await Promise.all(rules.map((rule) => rule.run(req)));
  const validationError=validationResult(req);
  if(!validationError.isEmpty()){
    res.render("upload-form",{errormessage:validationError.array()[0],
      user: req.body
    });
  }
  else{
    next()
  }
  
};
