import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/CartActions";
import MessageBox from "../componets/MessageBox";
import { Link } from "react-router-dom";

export default function CartScreen(props){

    /* get the prodcut id from url params */
    const productId = props.match.params.id;

    /* split out the qty of the url params */
    const qty = props.location.search? Number(props.location.search.split('=')[1]): 1 ;

    /* use to get redux actions from within  */
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const {cartItems} = cart;

    /* Send request to backend */
    useEffect(() => {

        if(productId){

            dispatch(addToCart(productId, qty));

        }

    }, [dispatch, productId, qty]);

    /* remove from cart (delete function) */
    const removeFromCartHandler = (id) => {

        //delete
        dispatch(removeFromCart(id));
    };

    /* In Progress - Checkout button, add redirect for future */
    const checkOut = () => {

        props.history.push("/signin?redirct=shipping");

    }

    return(

        <div className="row top">
        <div className="col-2">
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>Cart is empty <Link to="/">Go Back to Homescreen</Link></MessageBox>) : (
            <ul>
              {cartItems.map((item) => (<li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${item.price}</div>
                    <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h2>
              </li>
              <li>
                <button
                  type="button"
                  onClick={checkOut}
                  className="primary block"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }