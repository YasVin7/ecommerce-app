import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div class="header">
        <h1>Welcome to BeautyCraft Shop</h1>

        <div class="bg-text"></div>
      </div>
      <p class="my-4 fs-5">Your source for unique and handmade accessories</p>

      {/* slideshow with few images */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active h-100">
            <img src="h1.png" class="d-block w-60 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-60 img-fluid" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-60 img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* use cards to naviaget products */}
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="card shadow">
              <img src="rings.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/rings" class="btn btn-primary">
                  Rings
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card shadow">
              <img src="Earings.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/earings" class="btn btn-primary">
                  Earings
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card shadow">
              <img src="Scrunchies.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/scrunchies" class="btn btn-primary">
                  Scrunchies
                </a>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card shadow">
              <img src="neckh.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <a href="/necklace" class="btn btn-primary">
                  Necklace
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img src="h11.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <body>
        <footer class="footer">
          <h2 class="website-heading"> BeautyCraft Accessories </h2>
          <div class="footer-item">
            <h2 class="footer-heading"> Contact Us </h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/your_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/your_page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} />
                </a>
                <li>
                  <a
                    href="https://www.instagram.com/your_page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} />
                  </a>
                </li>
              </li>
              <li> +94 72 341 35 44 </li>
              <li> BeautyCraft@gmail.com </li>
            </ul>
          </div>
          <div class="footer-item">
            <h2 class="footer-heading"> About Us</h2>
            <ul>
              <li>
                BeautyCraft is your one-stop shop for all things beauty. We
                offer a wide range of high-quality beauty products, from
                skincare to makeup, haircare, and more. Our mission is to help
                you look and feel your best, empowering you to express your
                unique beauty.
              </li>
            </ul>
          </div>

          <div class="footer-item">
            <h2 class="footer-heading"> Privacy Policy</h2>
            <ul>
              <li> asnfk kdbfk </li>
              <li> ansakfjkajf </li>
            </ul>
          </div>
        </footer>
      </body>
    </div>
  );
};
export default Home;
