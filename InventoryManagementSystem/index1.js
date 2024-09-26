import express from 'express';
import projectController from './src/controller/controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import validationRequest from './src/middlewares/validation-middleware.js';
import session from 'express-session';
import { uploadFile } from './src/middlewares/update-product.middleware.js';

// create an object to use controller functions
const projController = new projectController();
//create server using express
export const server = express();


// received data is in encoded format and that is handeld here
server.use(express.urlencoded({ extended: true }));
server.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// telling our system that we are using EJS template engine and it's layout
server.set('view engine','ejs');
server.set('views', path.join(path.resolve(),'src','view'));
server.use(ejsLayouts);
server.use(express.static("public"));

// create routes for calls
server.get('/',projController.getProduct);
server.get('/new',projController.getAddForm);
server.post('/',uploadFile.single('imageUrl'),validationRequest,projController.addNewProduct);
server.get('/update-product/:id',projController.getUpdateProduct);
server.post('/update-product',projController.postUpdateProduct);
server.get('/delete-product/:id',projController.deleteProduct);

server.get('/logout', projController.logout);

// listen the server