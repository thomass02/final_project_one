
import React from "react";

export default class BrandSelection extends React.Component{
    
    constructor(props) {

            super(props);
            this.state = {   
                brands:[],
                brand:"",
             
            };

            this.handleBrandSubmit = this.handleBrandSubmit.bind(this);
        }

    
    /* track value of device state when submit is clicked */
    handleBrandSubmit(event){

        alert('Your selected value is ' + this.state.brand);
        event.preventDefault();
    }


    /* track value of state when new slection occurs */
    handleBrandChange = event => {

        this.setState({brand: event.target.value});

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

        const brands = require('./brandDropdown.json');
        this.setState({brands: brands});
    }

    render(){

        /* Products - brand filtering */
        const brands = this.state.brands;
        const brand = this.state.brand;

        return(

        <form onSubmit={this.handleBrandSubmit}>
                <label>  Select Brands </label>
                <select
                    value={this.state.brand}
                    onChange={this.handleBrandChange}
                    >
                    {brands.map(brand => (
                        <option key={brand.label} value={brand.label}>
                            {brand.label}
                        </option>
                    ))}
                </select>
            <br />
            <br />
        </form>
        );
    }
}