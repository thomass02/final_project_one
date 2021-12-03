
import React from "react";

export default class RatingsSelection extends React.Component{
    
    constructor(props) {

            super(props);
            this.state = {   
                ratings:[],
                rating:"",
             
            };

            this.handleRatingSubmit = this.handleRatingSubmit.bind(this);
        }

    
    /* track value of device state when submit is clicked */
    handleRatingSubmit(event){

        alert('Your selected value is ' + this.state.rating);
        event.preventDefault();
    }


    /* track value of state when new slection occurs */
    handleRatingChange = event => {

        this.setState({rating: event.target.value});

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

        const ratings = require('./ratingsDropdown.json');
        this.setState({ratings: ratings});
    }

    render(){

        /* Products - ratings filtering */
        const ratings = this.state.ratings;
        const rating = this.state.rating;

        return(

        <form onSubmit={this.handleRatingSubmit}>
                <label>  Select Ratings Range </label>
                <select
                    value={this.state.rating}
                    onChange={this.handleRatingChange}
                    >
                    {ratings.map(rating => (
                        <option key={rating.stars} value={rating.stars}>
                            {rating.stars}
                        </option>
                    ))}
                </select>
            <br />
            <br />
        </form>
        );
    }
}
