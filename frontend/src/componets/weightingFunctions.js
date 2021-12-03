import React from 'react'

export default function weightingFunctions(price, features, brand, rating) {

    // pass in user slected preference and perform assigned calculations to establish weights

    /*future implementation will calculate filters dynamically
    priceHigh;
    priceMed;
    priceLow;
    featuresMin;
    featuresMax;
    brandKnown;
    brandUnKnown;
    ratingHigh;
    ratingMed;
    ratingLow;
    */

    // sudo code

    /* based on inital product filter, get all products  
        example..filter = router, return all router products
        in the inventory.

        price => (weight = 9)
            calculate mean = (SUM of price for all products/ number of products)
            calculate variance = (1/total products * SUM(x - mean)^2) - where x is the individal product pricing
            calculate std dev = square(variance)
                priceHigh = > 1 std deviation from mean
                priceMed = 1 < x < 1 std deviation (within 1 std)
                priceLow = < 1 std deviation

        features => (weight = 7)
            requires testing - ideally, this would be dependent per product (dynamic analyis and averaging)
                featuresMax = > 5 additonal features
                featuresMin = < 5 additional features
        
        brand => (weight = 5)
            requires testing - ideally, this would be dependent per product type (dynamic analyis and averaging)
                brandKnown = yes, if on pre-defined list and "well established"
                brandUnKnown = no, if not on pre-defined list and not "well established"

        rating => (weight = 5)
            requires testing - ideally, this would be dependent per product type (dynamic analyis and averaging)
                ratingHigh = > 50 ratings
                ratingMed = 10 < x < 50 ratings
                ratingLow = < 10 ratings

        loop through easy product and assign weights based on what varabile they fit into
        add all weights and assign that int to each product
    */
    
    

    return (
        <div>
            {/* display products (roouters in our example) sorting by the the number calculated above (desending order) */}
        </div>
    )
}
