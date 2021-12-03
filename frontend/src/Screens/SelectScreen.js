import React, {useEffect} from "react";
// import Axios from 'axios';
import {useDispatch, useSelector } from "react-redux";
import MessageBox from "../componets/MessageBox";
import LoadingBox from "../componets/LoadingBox";
import { listDevices} from "../actions/ProductActions";
// import MultiDropDown from "../componets/DeviceDropdown";
import DeviceDropDown from "../componets/DeviceDropdown";
import PriceDropdown from "../componets/PriceDropdown";
import FeaturesDropdown from "../componets/FeaturesDropdown";
import BrandDropdown from "../componets/BrandDropdown";
import RatingsDropdown from "../componets/RatingsDropdown";


export default function SelectScreen(){

    /* use to get redux actions from within  */
    const dispatch = useDispatch();

    /* get device list from redux store  */
    const deviceList = useSelector((state) => state.deviceList);

    /* get data from the product list */
    const {loading, error, devices} = deviceList;
    
    /* Send request to backend (Should run once) */
    useEffect(() => {

        dispatch(listDevices());

    }, [dispatch]);
    
    return (

        <div>
         
            {/* if loading is true - render data, if not display error message */}
            {loading? (<LoadingBox></LoadingBox>): error?(<MessageBox variant="danger">{error}</MessageBox>):(
                
                <div className="rowC">
                 <h2> Device Selection </h2>
                    <DeviceDropDown></DeviceDropDown>
                  
                </div>  
                
            )}
            <div className="rowC">
            <h2> Let us help you, help yourself!</h2>
            <br></br>
            
                    <div className="space">
                    <h2> Preference Selection </h2>
                        <PriceDropdown></PriceDropdown>
                    </div>
                    <div className="space">
                        <FeaturesDropdown></FeaturesDropdown>
                    </div>
                    <div className="space">
                        <BrandDropdown></BrandDropdown>
                    </div>
                    <div className="space">
                        <RatingsDropdown></RatingsDropdown>
                    </div>
            </div>  
        </div>
    );
}