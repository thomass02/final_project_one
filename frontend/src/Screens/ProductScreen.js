import React, { useEffect, useState} from "react";
import Rating from "../componets/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../componets/LoadingBox";
import MessageBox from "../componets/MessageBox";
import { detailsProduct } from '../actions/ProductActions';



export default function ProductScreen(props){

    /* use to get redux actions from within  */
    const dispatch = useDispatch();

    /* get the product id from the url params */
    const productId = props.match.params.id;

    /* get the product detials via selector from the productID */
    const productDetails = useSelector((state) => state.productDetails);

    /* track the quantity (current, and allow to set new */
    const [qty, setQty] = useState(1);

    /* tack loading issues, errors, along with the product */
    const {loading, error, product} = productDetails;

    /* Send request to backend */
    useEffect(() => {

        dispatch(detailsProduct(productId));

    }, [dispatch, productId]);

    // // const product = data.products.find((x) => x._id === props.match.params.id);
    // const {id} = useParams();
    // console.log(id);
    // const product = data.products.find((x) => x._id === id);
    // /* Check to see if the product ID is found, if not - display message */
    // console.log(product);
    
    // if(!product){

    //     return <div> Product does not exsist </div>;
    
    // }

    const addToCart =() => {
        
        /*  */
        props.history.push(`/cart/${productId}?qty=${qty}`);

    };

    return ( 

        <div>
        
            {loading? (<LoadingBox></LoadingBox>): error?(<MessageBox variant="danger">{error}</MessageBox>):(
        
        <div>
        <Link to="/">Back to results</Link>

        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}/>
            </div>
        
            <div className="col-1">
                <ul>
                    <li><h1>{product.name}</h1></li>
                    <li>Brand: {product.brand}</li>
                    <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                    <li>Price: {'$' + product.price}</li>
                    <li>Features: <p>{product.features}</p></li>
                </ul>
            </div>

            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price" >{'$' + product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div>
                                    {product.countInStock>0? (<span className="success">In Stock</span>) :
                                     (<span className="danger">Item Unavailable</span>)}

                                 </div>
                             </div>
                        </li>
                         {
                            product.countInStock > 0 && (
                                <>
                                  <li>
                                    <div className="row">
                                      <div>Qty</div>
                                      <div>
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                          {[...Array(product.countInStock).keys()].map((x) => (
                                              
                                              <option key={x + 1} value={x + 1}> {x + 1}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <button
                                      onClick={addToCart}
                                      className="primary block"
                                    >Add to Cart</button>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>

        )}
    </div>

    );
}