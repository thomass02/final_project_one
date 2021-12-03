import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstant";

export const cartReducer = (state = {cartItems:[]}, action) => {

    switch(action.type){

        case CART_ADD_ITEM:

            /* get the item being added to the cart */
            const item = action.payload;

            /* determine if the item is already in the cart or not */
            const existItem = state.cartItems.find((x) => x.product === item.product);

            /* item is already in the cart, just need to update it */
            if(existItem){

                return{

                    ...state,
                    /* if the same item is added there may be some differences added - 
                    check to see that an update as nessessary
                     */
                    
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
                };
            }
            /* new item added */
            else {

                /* add new items "item" to existing items "...state.cartItems" */
                return {...state, cartItems: [...state.cartItems, item]};
            }

        case CART_REMOVE_ITEM:

            /* filter out items not equal to action payload (items still in cart) */
            return {...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload),};

        default:
            return state;
    }
};