// import React, { createContext, useEffect, useState } from "react";
// import { PRODUCT1 } from "../Components/PRODUCTS/Info/rings";
// import { PRODUCT2 } from "../Components/PRODUCTS/Info/earings";
// import { PRODUCT3 } from "../Components/PRODUCTS/Info/scrunchies";
// import { PRODUCT4 } from "../Components/PRODUCTS/Info/necklace";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {}; // creating a cart object

//   const productArrays = [PRODUCT1, PRODUCT2, PRODUCT3, PRODUCT4]; // array of product arrays

//   // loop through all of the product arrays
//   for (let j = 0; j < productArrays.length; j++) {
//     const productArray = productArrays[j];

//     // loop through all of the items in the product array
//     for (let i = 1; i <= productArray.length; i++) {
//       cart[`${j + 1}_${i}`] = 0; // set the cart object key as `${arrayIndex + 1}_${itemIndex}`
//     }
//   }

//   return cart;
// };

// export const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   useEffect(() => {
//     console.log("This is use Effect hook ");
//     const cart = JSON.parse(localStorage.getItem("cart"));
//     if (cart) {
//       setCartItems(cart);
//     }
//   }, []);

//   //function to generate full cart amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     //loop through the object
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         //go to the PRODUCTS array and find the products in this array with the id
//         //where the product id is equal to the item(have to convert into a Number])
//         let itemInfo = PRODUCT1.find((product) => product.id === Number(item));
//         totalAmount += cartItems[item] * itemInfo.price;
//       }
//     }
//     return totalAmount;
//   };

//   //Adding a product to the cart
//   const AddToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   };

//   //Removing a product in the cart
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   };

//   //Update products in the cart
//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   };

//   const contextValue = {
//     cartItems,
//     AddToCart,
//     updateCartItemCount,
//     removeFromCart,
//     getTotalCartAmount,
//   };

//   return (
//     //passing the contextvalue to the provider
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;
