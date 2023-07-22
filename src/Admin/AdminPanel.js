import React, { useEffect, useState } from "react";
import { useAuth } from "./UseAuth";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../Services/Firebase";
import { useHistory } from "react-router-dom"; // Import useHistory from React Router

const AdminPanel = () => {
  const history = useHistory(); // Access the history object
  const { currentUser } = useAuth(); // Get the current user from Firebase Auth
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin when the component mounts
    if (currentUser) {
      checkAdminStatus();
    }
  }, [currentUser]);

  const checkAdminStatus = async () => {
    try {
      // Query the "Admin" collection with the current user's name
      const adminRef = collection(db, "Admin");
      const q = query(adminRef, where("name", "==", currentUser?.name)); // Use optional chaining '?'
      const snapshot = await getDocs(q);

      // If the user's name exists in the "Admin" collection, they are an admin
      setIsAdmin(!snapshot.empty);

      // Redirect the admin user to the admin page
      if (isAdmin) {
        history.push("/admin"); // Replace "/admin" with the actual path to your admin page
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
    }
  };

  return null; // Return null to avoid rendering any JSX elements in this component
};

export default AdminPanel;
