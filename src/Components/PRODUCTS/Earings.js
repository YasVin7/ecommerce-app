import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../Services/Firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useCart } from "../Cart/CartContext"; // Import the Cart context

import "./info.css";

export const Earings = () => {
  const [rings, setRings] = useState([]);
  const { addToCart } = useCart(); // Get the addToCart function from the Cart context
  const navigate = useNavigate();

  // Initialize the useNavigate hook
  const getRings = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));

      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setRings(newData);
      console.log(newData);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  const handleAddToCart = (ring) => {
    addToCart(ring);
    navigate("/cart"); // Navigate to the Cart page after adding to cart
  };

  useEffect(() => {
    getRings();
  }, []);

  return (
    <div className="shop">
      <div className="shoptitle">
        <h1> Earings</h1>
      </div>

      {/* Show the added rings as a list */}
      <ul>
        {rings.map((ring) => {
          // Additional check for ring category
          if (ring.category === "earings") {
            return (
              <li key={ring.id}>
                {/* Your existing code for displaying ring details */}

                <img
                  src={ring.productImage}
                  alt={ring.name}
                  style={{ width: "300px", height: "300px" }}
                />
                <h2>{ring.name}</h2>
                <p>Price: {ring.price}</p>

                {/* Add to Cart button */}
                <button
                  onClick={() => handleAddToCart(ring)}
                  className="btn btn-primary"
                  style={{ backgroundColor: "rgba(109, 7, 58, 0.616)" }}
                >
                  Add to Cart
                </button>
              </li>
            );
          } else {
            return null; // Skip non-ring items
          }
        })}
      </ul>
    </div>
  );
};

export default Earings;
