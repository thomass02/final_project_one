import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
// import data from './data.js';
import userRouter from './routers/userRouter.js';

/* use dotenv package to store and pass secrets */
dotenv.config();

/* establish express app */
const app = express();

/* parse web json data from the body requests */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* connect to local mongodb - check for env variable, if not use hard codeded */
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/EZTech', {
});

/* Get data array of devices types from data.js */
// app.get('/api/deviceType', (req, res) => {

//   /* All product info from data array */
//   res.send(data.deviceType);

// });

/* Get data array of price ranges for user preference from data.js */
// app.get('/api/priceFilter', (req, res) => {

//   /* All product info from data array */
//   res.send(data.priceFilter);

// });

/* Get data array of feature ranges for user preference from data.js */
// app.get('/api/featuresFilter', (req, res) => {

//   /* All product info from data array */
//   res.send(data.featuresFilter);

// });

/* Get data array of brand types for user preference from data.js */
// app.get('/api/brandFilter', (req, res) => {

//   /* All product info from data array */
//   res.send(data.brandFilter);

// });

/* Get data array of rating ranges for user preference from data.js */
// app.get('/api/ratingsFilter', (req, res) => {

//   /* All product info from data array */
//   res.send(data.ratingsFilter);

// });

/* Get data array of products from data.js */
// app.get('/api/products', (req, res) => {

//     /* All product info from data array */
//     res.send(data.products);

// });

// app.get('/api/products/:id', (req, res) => {

//     /* match product id to a product, if it exists, pass the product object. If not, show error msg */
//     const product = data.products.find((x) => x._id === req.params.id);

//     if (product) {

//       res.send(product);

//     } 

//     else {

//       res.status(404).send({ message: 'Product Was Not Found' });

//     }

//   });

/* use - users api route */
app.use('/api/users', userRouter);

 /* use - products api route */
app.use('/api/products', productRouter);

/* Server root - display success */
app.get('/', (req, res) => {

    res.send('Server is good to go!');

});

/* catch dups of errors during loading screens/ transitions */
app.use((err, req, res, next) =>{

  res.status(500).send({message: err.message});

})

/* Serve on port based on environmental variable, if not serve on port 5000 */
const port = process.env.PORT || 5000;
app.listen(port, () => {

    console.log(`Source at http://localhost:${port}`);

});

