import path from "path";
import productModel from "../model/model.js";

export default class projectController{
    getProduct(req,res) {
        console.log('inside getProduct');        
        let products = productModel.get();
        return res.render('index',{products}); 
        // return res.sendFile(path.join(path.resolve(),'src','view','index.html'));        
    }

    getAddForm(req,res){
        console.log('inside getAddForm');
        return res.render('new-product',{errormessage:null});
    }
    addNewProduct(req, res) {
        console.log('inside addNewProduct');        
        // data received and we printing it on console      
        console.log(req.body);       
        // add this data into productModel(products)
        productModel.add(req.body);
        
        // fetch the upadted producs again
        let products = productModel.get();

        // again render the products page
        return res.render('index',{products});
    }

    getUpdateProduct(req,res){
        const id = req.params.id;

        const productFound = productModel.getByID(id);
        return res.render('update-product',{errormessage:null, products:productFound});
    }

    postUpdateProduct(req,res){
        productModel.update(req.body);
        let products = productModel.get();
        return res.render('index',{products});
    }
    deleteProduct(req,res){
        const id = req.params.id;
        productModel.delete(id);
       
        let products = productModel.get();
        return res.render('index',{products})

    }
    logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send('Error logging out');
            }
            res.send("You Have Logged Out"); // Redirect to the home or login page
        });
    }
}
