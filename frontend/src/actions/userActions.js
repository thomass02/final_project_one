import Axios  from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstant"

export const signin = (email, password) => async(dispatch) =>{

    /* first state - request */
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});

    try{

        /* login credentials successful - dispatch success */
        const {data} = await Axios.post('/api/users/signin', {email, password});
        dispatch({type:USER_SIGNIN_SUCCESS, payload: data});

        /* keep user signin even if user closes browser */
        localStorage.setItem('userData', JSON.stringify(data));

    }

    catch(err){

        dispatch({
            type: USER_SIGNIN_FAIL, payload:

            /*  backend failure */
            err.response && err.response.data.message
          
            /* render the error message from backend */
            ? err.response.data.message

            /* otherwise, diplay the generic error message */
            : err.message,
        });
    }
}

/* remove persistance of signed in user from local storage */
export const signout = () => (dispatch) =>{

    /* remove user data and saved cart items */
    localStorage.removeItem('userData');
    localStorage.removeItem('cartItems');
    
    /* dispatch new state */
    dispatch({type: USER_SIGNOUT});

};