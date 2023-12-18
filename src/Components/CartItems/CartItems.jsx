import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import minus_icon from '../Assets/minus_icon.png'
import plus_icon from '../Assets/plus_icon.png'
import './CartItems.css'
export const CartItems = () => {
  const {getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id] >0 ){
            return <div>
            <div className="cartItems-format">
              <img className="cartItems-product-icon" src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartItems-quantity">{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img src={minus_icon} onClick={()=> {removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}

      <div className="cartItems-down">
        <div className="cartItems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartItems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalAmount()}</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalAmount()}</h3>
                </div>
            </div>

            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
            <p>If you have a PromoCode, please enter it here.</p>
            <div className="cartItems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};
