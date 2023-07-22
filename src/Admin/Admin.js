import React, { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Services/Firebase";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export const Admin = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [catagory, setCatagory] = useState("");
  const [products, setProducts] = useState([]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    }
  };

  const addTodo = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const CleanUpFormData = () => {
    setId("");
    setName("");
    setPrice("");
    setProductImage("");
  };

  // adding a new document (collection entry) to the Firestore database
  const AddFunction = async () => {
    try {
      console.log(name);
      console.log(catagory);

      await addDoc(collection(db, "products"), {
        name: name,
        price: price,
        productImage: productImage,
        category: catagory,
      });
      // navigate("/rings");
      alert("Data Added Successfully!");
      // CleanUpFormData();
      // After adding, fetch the updated data and update the state again.
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // store (add) and retrieve data from the Firestore database
  const getProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.docs.forEach((doc) => {
        console.log("Document ID:", doc.id);
        console.log("Document Data:", doc.data());
      });
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newData);
      console.log(newData);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Function to delete a product by id
  const Delete = async (productId) => {
    try {
      // Delete the product document from Firestore
      await deleteDoc(doc(db, "products", productId));

      alert("Product Deleted Successfully!");

      // After deletion, fetch the updated data and update the state again.
      getProducts();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputname"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            catagory
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setCatagory(e.target.value)}
          >
            <option selected>Open this select menu</option>
            <option value="ring">ring</option>
            <option value="earings">earings</option>
            <option value="scrunchies">scrunchies</option>
            <option value="necklace">necklace</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="inputGroupFile02" className="form-label">
            Upload Image
          </label>
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={AddFunction}
            style={{ backgroundColor: "rgba(109, 7, 58, 0.616)" }}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="m-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                <b>id</b>
              </th>
              <th scope="col">
                <b>product name</b>
              </th>
              <th scope="col">
                <b>category</b>
              </th>
              <th scope="col">
                <b>price</b>
              </th>
              {/* <th scope="col">productImage</th> */}
              <th scope="col">
                <b>actions</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              // Additional check for ring categor
              return (
                <tr>
                  <th scope="row">
                    <b>{product.id}</b>
                  </th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  {/* <td>{product.productImage}</td> */}
                  <td>
                    <button
                      onClick={() => navigate(`./update/${product.id}`)}
                      className="btn btn-primary"
                      style={{ backgroundColor: "rgba(109, 7, 58, 0.616)" }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => Delete(product.id)}
                      className="btn btn-primary"
                      style={{ backgroundColor: "red" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                // <li key={ring.id}>
                //   {/* Your existing code for displaying ring details */}
                //   <img
                //     src={ring.productImage}
                //     alt={ring.name}
                //     style={{ width: "300px", height: "300px" }}
                //   />
                //
                // </li>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
