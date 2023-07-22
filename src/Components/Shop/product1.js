import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export const Product1 = (props) => {
  const { id, name, price, productImage } = props.data;
  const { AddToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      {/* When click on the button, call the AddToCart function from ShopContext */}
      <button className="addToCartBttn" onClick={() => AddToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
      </button>
    </div>
  );
};
export default Product1;
