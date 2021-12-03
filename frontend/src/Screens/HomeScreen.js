import React, {useEffect} from "react";
// import Axios from 'axios';
import Product from "../componets/Product";
import LoadingBox from "../componets/LoadingBox";
import MessageBox from "../componets/MessageBox";
import {useDispatch, useSelector } from "react-redux";
import { listProducts} from "../actions/ProductActions";
// import DeviceDropDown from "../componets/DeviceDropDown";

// import data from "../data";

export default function HomeScreen(){

    /* use to get redux actions from within  */
    const dispatch = useDispatch();

    /* get prouductlist from redux store  */
    const productList = useSelector((state) => state.productList);

    /* get data from the product list */
    const {loading, error, products} = productList;
    
    /* Send request to backend (Should run once) */
    useEffect(() => {

        dispatch(listProducts());

    }, [dispatch]);
    
    /* Homescreen Redering */
    return (

       <div>

            {/* if loading is true - render data, if not display error message */}
            {loading? (<LoadingBox></LoadingBox>): error?(<MessageBox variant="danger">{error}</MessageBox>):(

            <div className="row center">
               
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
            )}
        </div>
    );
}