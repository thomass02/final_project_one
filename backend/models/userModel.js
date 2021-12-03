import mongoose from "mongoose";

/* define the User model */
const user_model = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    isAdmin: {type: Boolean, default:false, required: true}
}, {
    timestamps: true,
});

/* Create the User model */
const User = mongoose.model('User', user_model);
export default User;