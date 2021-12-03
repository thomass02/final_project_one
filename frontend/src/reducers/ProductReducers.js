
import {SET_DROPDOWN_VALUES, DEVICE_LIST_FAIL, DEVICE_LIST_REQUEST, DEVICE_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/ProductConstants";

/* reducer for product list actions */
export const productListReducer = (state = {loading:true, products: []}, action) => {

    switch(action.type){

        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
        
    }
};

/* reducer for product details actions */
 export const productDetailsReducer = (state = {loading:true, product:{}}, action) => {

     switch (action.type){
         case PRODUCT_DETAILS_REQUEST:
             return {loading: true};
         case PRODUCT_DETAILS_SUCCESS:
             return {loading: false, product: action.payload};
         case PRODUCT_DETAILS_FAIL:
             return {loading: false, error: action.payload};
         default:
             return state;
     }
 };

 /* reducer for device list drop down actions */
 export const productDeviceReducer = (state = {loading:true, devices:[]}, action) => {

    switch (action.type){
        case DEVICE_LIST_REQUEST:
            return {loading: true};
        case DEVICE_LIST_SUCCESS:
            return {loading: false, devices: action.payload};
        case DEVICE_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};

//manages the selected values array
export const selectedValuesReducer = (state = [], action) => {

    switch (action.type) {
        case SET_DROPDOWN_VALUES:
            return action.payload;
        default:
            return state;
    }
};