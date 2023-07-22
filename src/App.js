import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { SignIn } from "./Components/SignIn/Signin";
import { Rings } from "./Components/PRODUCTS/Rings";
import { Earings } from "./Components/PRODUCTS/Earings";
import { Scrunchies } from "./Components/PRODUCTS/Scrunchies";
import { Necklace } from "./Components/PRODUCTS/Necklace";
import { Cart } from "./Components/Cart/Cart";
import { Admin } from "./Admin/Admin";
import { Update } from "./Admin/Update";
import "./Services/Firebase";
import { NavBar } from "./Components/Navigations/NavBar";
import { CartProvider } from "./Components/Cart/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/rings" element={<Rings />}></Route>
            <Route path="/earings" element={<Earings />}></Route>
            <Route path="/scrunchies" element={<Scrunchies />}></Route>
            <Route path="/necklace" element={<Necklace />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin/update/:id" element={<Update />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
