import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from "../utils.js";

/* define the router */
const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler (async (req, res) => {

    /* remove users so we dont error from creating the same ones over again */
    //await User.remove({});
    
    /* import user data from the data.js file */
    const createdUsers = await User.insertMany(data.users);

    /* return the created users (from the JSON file) */
    res.send ({createdUsers});
}));

/* creat user token for signin  */
userRouter.post('/signin',expressAsyncHandler (async (req, res) => { 
    
    /* check to see if the user email matches an email in the database */
    const user = await User.findOne({email: req.body.email});

    /* if the user email is found, check password */
    if(user){

        /* validating password - if match, return user info - future enhancement would be to encrypt pass */
        if(req.body.password === user.password){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    /* user not found or bad password - notify user */
    res.status(401).send({message: ' Wrong email or bad password'});


}));

export default userRouter;