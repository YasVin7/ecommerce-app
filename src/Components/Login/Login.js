import React, { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const Login = () => {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();
  const [user, setUser] = useState(null); // Added user state

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.displayName); // Set the user state to displayName when logged in
    } else {
      setUser("Guest"); // Set the user state to "Guest" when logged out
    }
  });

  const GoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user.displayName); // Set the user state to displayName after successful login
      })
      .catch((error) => {
        // Handle Errors here.
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser("Guest"); // Set the user state to "Guest" after successful logout
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4">Login</h3>
            <p className="text-center">Welcome {user || "Guest"}</p>
            {/* Display the user's name or "Guest" from the user state */}
            <div className="d-grid gap-2">
              <button
                onClick={GoogleLogin}
                className="btn btn-primary order-2 order-lg-1 d-flex flex-column align-items-center"
                type="button"
                style={{ backgroundColor: " rgba(202, 40, 121, 0.616)" }} // Replace colur with style and add backgroundColor
              >
                Login With Google
              </button>
              <button
                onClick={handleLogout}
                className="btn btn-danger"
                type="button"
                style={{ backgroundColor: "rgba(202, 40, 121, 0.616)" }} // Replace colur with style and add backgroundColor
              >
                Logout
              </button>
              {/* Use handleLogout function */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
