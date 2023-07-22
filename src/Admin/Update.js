import React, { useState, useEffect } from "react";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../Services/Firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Update = () => {
  const { id } = useParams();
  const [updatedName, setUpdatedName] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [productId, setProductId] = useState("");
  const [updatedProductImage, setUpdatedProductImage] = useState("");
  const navigate = useNavigate();

  const handleUpdatedImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUpdatedProductImage(reader.result);
      };
    }
  };

  // Update the product document in Firestore
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reference to the document with the given ID in the "products" collection
      const productRef = doc(db, "products", id);

      // Update the document with the new values for "name," "category," and "price" fields
      await setDoc(productRef, {
        name: updatedName,
        category: updatedCategory,
        productImage: updatedProductImage,
        price: updatedPrice,
      });

      // Show an alert to indicate that the product has been updated successfully
      alert("Product Updated Successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating product:", error);
      // Handle any errors that may occur during the update process
    }
  };

  const getProductDetails = async () => {
    console.log(id);
    console.log(productId);

    try {
      const docRef = doc(collection(db, "products"), id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        // If the document with the specific ID exists, log its data
        console.log("Document ID:", docSnapshot.id);
        console.log("Document Data:", docSnapshot.data());
        setUpdatedName(docSnapshot.data().name);
        setUpdatedPrice(docSnapshot.data().price);
        setUpdatedCategory(docSnapshot.data().category);
        setProductId(id);
      } else {
        console.log("Document not found"); // Document with the specific ID does not exist
      }
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div>
      <h3>Update Product</h3>
      <div className="row g-4">
        <div className="col-md-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputname"
            placeholder=""
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="inputprice"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="inputGroupFile02" className="form-label">
            update Image
          </label>
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={handleUpdatedImageUpload}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpdateSubmit}
            style={{ backgroundColor: "rgba(109, 7, 58, 0.616)" }}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
