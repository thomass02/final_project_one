import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstant";

export const addToCart = (productId, qty) => async(dispatch, getState) => {

    /* call the products api to retrieve the product data for items added to cart */
    const {data} = await Axios.get(`/api/products/${productId}`);

    /* reguest to the redux store to add the product details to cart */
    dispatch({

        type: CART_ADD_ITEM,
        payload:{

            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });

    /* save cart items to local storage for persistance */
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

/* remove items from cart action */
export const removeFromCart = (productId) => (dispatch, getState) => {

    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

  };