import React from "react";
import { useStateValue } from "./StateProvider";
import './Home.css'

function Checkout({ id, title, image, price, rating }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const remove = () => {
    // remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="Product" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          {price}
        </p>
        <button onClick={remove}>Remove from basket</button>
      </div>
    </div>
  );
}

export default Checkout;