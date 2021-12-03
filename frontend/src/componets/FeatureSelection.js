
import React from "react";

export default class FeatureSelection extends React.Component{
    
    constructor(props) {

            super(props);
            this.state = {   
                features:[],
                feature:"",
             
            };

            this.handleFeatureSubmit = this.handleFeatureSubmit.bind(this);
        }

    
    /* track value of device state when submit is clicked */
    handleFeatureSubmit(event){

        alert('Your selected value is ' + this.state.feature);
        event.preventDefault();
    }


    /* track value of state when new slection occurs */
    handleFeatureChange = event => {

        this.setState({feature: event.target.value});

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

        const features = require('./featuresDropdown.json');
        this.setState({features: features});
    }

    render(){

        /* Products - feature filtering */
        const features = this.state.features;
        const feature = this.state.feature;

        return(

        <form onSubmit={this.handleRatingSubmit}>
                <label>  Select Features </label>
                <select
                    value={this.state.feature}
                    onChange={this.handleFeatureChange}
                    >
                    {features.map(feature => (
                        <option key={feature.feat} value={feature.feat}>
                            {feature.feat}
                        </option>
                    ))}
                </select>
            <br />
            <br />
        </form>
        );
    }
}