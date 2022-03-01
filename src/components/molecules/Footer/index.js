import { Hs2 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="bg-gradient-6">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row w-100 pt-5">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="wrapper text-fade-1 text-center text-lg-start">
                <h3 className="fs-6 mb-4">Products</h3>
                <nav>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Receivers & 3D Blu-ray
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Laudspeaker
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Headphones
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Wireless
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="wrapper text-fade-1 text-center text-lg-start">
                <h3 className="fs-6 mb-4">Conditions</h3>
                <nav>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Terms of use
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mb-lg-0">
              <div className="wrapper text-fade-1 text-center text-lg-start">
                <h3 className="fs-6 mb-4">About Us</h3>
                <nav>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    Contact
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    About Harman Kardon
                  </Link>
                  <Link
                    className="text-fade-1 text-decoration-none mb-1 d-block"
                    to="#"
                  >
                    History
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mb-lg-0 d-none d-lg-block">
              <div className="wrapper text-fade-1 text-center text-lg-start position-relative">
                <figure className="position-absolute top-0 start-50 translate-middle w-100 pb-3">
                  <img className="img-fluid" src={Hs2} alt="headset image" />
                  <figcaption className="fs-5 text-white text-center">
                    harman<span className="text-fade-1 fw-light">/</span>kardon'
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
