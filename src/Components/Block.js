import React from "react";
import "./Block.css";
import {useStateValue} from './StateProvider'


function Block({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };


  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          {price}
        </p>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Block;