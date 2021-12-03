import mongoose from 'mongoose';

/* define the Product model */
const product_model = new mongoose.Schema({
    name: {type: String, required: true, unique:true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    brand: {type: String, required: true},
    rating: {type: Number, required: true},
    numReviews: {type: Number, required: true},
    features: {type: String, required: true}
}, {
    timestamps: true,
});

/* Create the User model */
const Product = mongoose.model('Product', product_model);
export default Product;