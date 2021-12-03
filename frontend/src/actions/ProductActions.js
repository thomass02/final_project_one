import Axios from "axios";
import { DEVICE_LIST_FAIL, DEVICE_LIST_REQUEST, DEVICE_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, SET_DROPDOWN_VALUES } from "../constants/ProductConstants"

/* Actions */
// this action sets the current selectct values
export const setCurrentSelectedValues = (e, data) =>{

  /* populate dropdown menu - first state */
  return{ type: SET_DROPDOWN_VALUES, payload: data.value}

}

/* get user slectable devices for drop down */
export const listDevices = () => async (dispatch) => {

  /* first state - request */
  dispatch({type: DEVICE_LIST_REQUEST,});

  try {

    /* use deviceType api to retrieve device type (router, modem, etc. ) */
    const { data } = await Axios.get('/api/deviceType');

    /* request state successful - deliver data */
    dispatch({ type: DEVICE_LIST_SUCCESS, payload: data });

  } 
  
  catch(err) {

    /* request state fail - deliver error message */
    dispatch({ type: DEVICE_LIST_FAIL, payload: err.message });

  }

};

/* list products from backend */
export const listProducts = () => async (dispatch) => {

    /* first state - request */
    dispatch({type: PRODUCT_LIST_REQUEST,});

    try {

      /* use products api to retrieve device type (router, modem, etc. */
      const { data } = await Axios.get('/api/products');

      /* request state successful - deliver data */
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } 
    
    catch(err) {

      /* request state fail - deliver error message */
      dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message });

    }

  };
  

  /* get product details from backend */
  export const detailsProduct = (productId) => async (dispatch) => {

    /* first state - request */
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    try {

      /* use products ID api to retrieve device type (router, modem, etc. */
      const { data } = await Axios.get(`/api/products/${productId}`);

      /* request state successful - deliver data */
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } 
    catch(err) {

      /* request state fail - deliver error message */
      dispatch({

        type: PRODUCT_DETAILS_FAIL,payload: 

            /*  backend failure */
            err.response && err.response.data.message
          
            /* render the error message from backend */
            ? err.response.data.message

            /* otherwise, diplay the generic error message */
            : err.message,
      });
    }
  };