import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import {useDispatch, useSelector} from "react-redux";

export default function SigninScreen(props) {

    /* react hooks to set inital states of username and password */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('initialState');

    /* establish redirect - use history (if exsists), if not go to home */
    const redirect = props.location.search? props.location.search.split('=', [1]):'/';

    /* get the user data from redux reavt */
    const userSignin = useSelector((state) => state.userSignin);
    const {userData} = userSignin;


    const dispatch = useDispatch();

    const submitHandler = (e) => {

        /* prevents inital refresh */
        e.preventDefault();
        
        /* call the dispatcher (pass in username and password) from actions component */
        dispatch(signin(email, password));
    };


    useEffect(() => {
        /* user data avaliable - send to redirect */
       if(userData){
            props.history.push(redirect);
       }

    }, [userData]);


    return (
        <div>
           <form className="form" onSubmit={submitHandler}>
               <div>
                   <h1>Please Sign In</h1>
               </div>
               <div>
               <label htmlFor="email">Email Address</label>
                   <input type="email" id="email" placeholder="Please enter email" required onChange={e => setEmail(e.target.value)}></input>
               </div>

               <div>
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" placeholder="Please enter password" required onChange={e => setPassword(e.target.value)}></input>
               </div>

               <div>
                   <label />
                   <button className="primary" type="submit">Sign In</button>
               </div>

                {/* /* allow users to create a new account */}
               <div>
                   <label />
                   <div>New customer? {' '} <Link to="/register">Create a new accout</Link></div>
               </div>

           </form>
        </div>
    )
}
