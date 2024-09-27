import path from "path";
import productModel from "../model/product.model.js";

export default class projectController{
    getProduct(req,res) {
        console.log('inside getProduct');        
        let products = productModel.getAll();
        return res.render('index',{products,
            userEmail:req.session.userEmail}); 
        // return res.sendFile(path.join(path.resolve(),'src','view','index.html'));        
    }

    getAddForm(req,res){
        console.log('inside getAddForm');
        return res.render('new-product',{errormessage:null,
            userEmail:req.session.userEmail});
    }
    addNewProduct(req, res) {
        console.log('inside addNewProduct');        
        // data received and we printing it on console      
        console.log(req.body);       
        // add this data into productModel(products)
        const imagePath = 'images/' + req.file.filename;
        productModel.add(req.body,imagePath);
        
        // fetch the upadted producs again
        let products = productModel.getAll();

        // again render the products page
        return res.render('index',{products,
            userEmail:req.session.userEmail});
        


    }

    getUpdateProduct(req,res){
        const id = req.params.id;

        const productFound = productModel.getByID(id);
        return res.render('update-product',{errormessage:null, products:productFound,
            userEmail:req.session.userEmail});
    }

    postUpdateProduct(req,res){
        productModel.update(req.body);
        let products = productModel.getAll();
        return res.render('index',{products,
            userEmail:req.session.userEmail});
    }
    deleteProduct(req,res){
        const id = req.params.id;
        productModel.delete(id);
       
        let products = productModel.getAll();
        return res.render('index',{products,
            userEmail:req.session.userEmail})

    }
   
}
