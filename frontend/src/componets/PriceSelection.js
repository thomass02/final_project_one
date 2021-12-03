
import React from "react";

export default class PriceSelection extends React.Component{
    
    constructor(props) {

            super(props);
            this.state = {   
                prices:[],
                price:"",
             
            };

            this.handlePriceSubmit = this.handlePriceSubmit.bind(this);
        }

    
    /* track value of device state when submit is clicked */
    handlePriceSubmit(event){

        alert('Your selected value is ' + this.state.price);
        event.preventDefault();
    }


    /* track value of state when new slection occurs */
    handlePriceChange = event => {

        this.setState({price: event.target.value});

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

        const prices = require('./priceDropdown.json');
        this.setState({prices: prices});
    }

    render(){

        /* Products - price filtering */
        const prices = this.state.prices;
        const price = this.state.price;

        return(

        <form onSubmit={this.handlePriceSubmit}>
                <label>  Select Price Range </label>
                <select
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                    >
                    {prices.map(price => (
                        <option key={price.range} value={price.range}>
                            {price.range}
                        </option>
                    ))}
                </select>
            <br />
            <br />
        </form>
        );
    }
}
