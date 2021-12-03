import jwt from 'jsonwebtoken';


/* generate "user" JSON Web token for auth */
export const generateToken = (user) =>{
    return jwt.sign({

        _id:user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    /* securely store JWT - set 30 day experation */
    }, process.env.JWT_SECRET, {expiresIn: '10d'});
}