import React from "react";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom static-top navbar-custom">
      <div className="container">
        {/* <a class="navbar-brand" href="#"> */}
        {/* <img src="" alt="..." class="logo-img" /> */}
        {/* </a> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active fs-5" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fs-5" href="/Login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="/SignIn">
                SignIn
              </a>
            </li>

            <li class="nav-item me-auto dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/shop"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                shop
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/rings">
                    Rings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/earings">
                    Earings
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider"></hr>
                </li>
                <li>
                  <a class="dropdown-item" href="/scrunchies">
                    Scrunchies
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/necklace">
                    Necklace
                  </a>
                </li>
                <li></li>
              </ul>
              <li className="nav-item">
                <a className="nav-link fs-5" href="/cart">
                  <ShoppingCart size={30} />
                </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
