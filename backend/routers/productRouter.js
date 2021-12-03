import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import data from "../data.js";
import Product from '../models/productModel.js';

/* define the router */
const productRouter = express.Router();

/* fetch all products  */
productRouter.get('/', expressAsyncHandler(async(req,res) => {

    const products = await Product.find({});
    res.send(products);

}));

productRouter.get('/seed', expressAsyncHandler (async (req, res) => {

    /* remove products so we dont error from creating the same ones over again */
    //await Product.remove({});
    
    /* import user data from the data.js file */
    const createdProducts = await Product.insertMany(data.products);

    /* return the created users (from the JSON file) */
    res.send ({createdProducts});
}));

/* return the product by id */
productRouter.get('/:id', expressAsyncHandler (async (req, res) => {

    /* use find by idea to find the specific product  */
    const product = await Product.findById(req.params.id);

    /* check to make sure the product exsits */
    if(product){

        res.send(product);
    }

    else{

        res.status(404).send({message: 'the product doesnt exsit'})
    }
}));

export default productRouter;