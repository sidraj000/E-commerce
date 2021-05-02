import React,{useState,useEffect} from 'react'
import './Home.css'
import './Block.css'
import { useStateValue } from './StateProvider'
import Navbar from './Navbar'
import { Link} from 'react-router-dom';
import Checkout from './Checkout'

function Cart() {
  const [{basket},dispatch]=useStateValue();

  // const [cart, setCart] = useState([]);
  
  // const remove = (removeitem) => {
  //   cart = [...basket];
  //   setCart(
  //     cart.filter((item)=>item!==removeitem
  //     )
  //   )
  // }

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [basket]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < basket.length; i++) {
      totalVal += basket[i].price;
    }
    setCartTotal(totalVal);
  };

  return (
    <div>
      <div className="colored-section" id="title">
            <Navbar/>
      </div>

      {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty </h2>
            <Link className="nav-link" to="/Fashion"><button id="btn">Continue Shopping</button> </Link>
          </div>
        ) :
        (
      <div>
          <h1>your Cart :</h1>
          {basket.map((item,index)=>(
            <Checkout
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
          />
        ))}
    </div>
    )}
    <br/><br/><br/>
    <hr/>
    <div className="Total">
      <div className="blank"></div>
      <h4 className="Subtotal">Subtotal ({basket.length} items): 
      <strong className="Subtotal1">    $  {cartTotal}</strong> </h4>
    </div>

    </div>
  )
}

export default Cart
