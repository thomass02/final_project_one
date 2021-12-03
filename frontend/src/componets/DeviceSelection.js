
import React from "react";
import Product from "./Product";

export default class DeviceSelection extends React.Component{
    
    constructor(props) {

            super(props);
            this.state = {   
                products:[],
                product:"",
             
            };

            this.handleDeviceSubmit = this.handleDeviceSubmit.bind(this);
        }

    
    /* track value of device state when submit is clicked */
    handleDeviceSubmit(event){

        alert('Your selected value is ' + this.state.product);
        event.preventDefault();
    }

    /* track value of state when new slection occurs */
    handleDeviceChange = event => {

        this.setState({product: event.target.value});

    }


    /* Check to make sure we do not have duplicate objects for filtering */
    getUnique(arr, comp){

        const unique = arr

        /* store the values to compare into the array */
        .map(e => e[comp])

        /* store the unique object */
        .map((e,i, final) => final.indexOf(e) === i && i)

        /* remove the dups and keep only the unique values */
        .filter(e => arr[e])

        /* map the unique onject */
        .map(e => arr[e]);

        return unique;
    }

    componentDidMount(){

        const products = require('./productsTest.json');
        this.setState({products: products});

    }


    render(){
        
        /* Products - device filtering */
        const products = this.state.products;
        const product = this.state.product;
        const uniqueProducts = this.getUnique(this.state.products, "category");
        const filterDeviceDropdown = products.filter(function(result){
            return result.category === product;
        });
        

        return(

            <div className="row">
            <form onSubmit={this.handleDeviceSubmit}>
                   
            <label>Select Device  </label>
                <select
                    value={this.state.product}
                    onChange={this.handleDeviceChange}
                    >
                    {uniqueProducts.map(product => (
                        <option key={product._id} value={product.category}>
                            {product.category}
                        </option>
                    ))}
                </select>
            {/* <div className="row center">

                <div className="rowC">
                    <label>Select Price  </label>
                        <select>
                            <option>Price</option>
                        </select>
                    
                </div>

                <div className="rowC">
                <label>Select Features  </label>
                    <select>
                            <option>Features</option>
                        </select>
                </div>

                <div className="rowC">
                <label>Select Brand  </label>
                    <select>
                            <option>Brand</option>
                        </select>
                </div>
                
                <div className="rowC">
                    <label>Select Ratings </label>
                        <select>
                            <option>Ratings</option>
                        </select>
                </div>
            </div>*/}
           
        
                {filterDeviceDropdown.map(product => (
    
                    <Product key={product._id} product={product}></Product>

                ))}
            <br />
            <br />
           
        </form>
        </div>
        
        );
    }
}
