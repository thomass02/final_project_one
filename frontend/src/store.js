
// import data from "./data";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import { productDetailsReducer, productDeviceReducer, productListReducer, selectedValuesReducer} from './reducers/ProductReducers';
import { userSigninReducer } from './reducers/userReducer';

const initialState = {

    userSignin:{

        /* check to see if user is logged in, if so, 
        convert to array for processing */
        userData: localStorage.getItem('userData')? 
        JSON.parse(localStorage.getItem('userData')):null,
    },

    cart: {

        /* check to see if items are existing in cart, if so, 
        convert to array for processing */
        cartItems: localStorage.getItem('cartItems')? 
        JSON.parse(localStorage.getItem('cartItems')):[],
    }

};

/* Get data through reducers dynamically
so we dont rely on static content */
const reducer = combineReducers({

    productList: productListReducer,
    productDetails: productDetailsReducer,
    // selectDevice: deviceDropdownReducer,
    cart: cartReducer,
    deviceList: productDeviceReducer,
    selectedValues: selectedValuesReducer,
    userSignin: userSigninReducer,
});

/* allow chrome browser redux tools access to store */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;


