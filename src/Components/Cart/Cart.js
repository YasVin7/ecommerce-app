import { useCart } from "./CartContext";

export const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={item.productImage} // Assuming you have a productImage property in each item object
              alt={item.name}
              style={{ width: "200px", height: "200px" }} // Adjust the width and height as needed
            />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-primary"
              style={{ backgroundColor: "rgba(109, 7, 58, 0.616)" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: {getTotalPrice()}</p>
    </div>
  );
};

export default Cart;
