import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark p-3 p-lg-4 ff-montserrat">
      <div className="container">
        <Link className="navbar-brand" to="#">
          harman<span className="text-fade-1 fw-light">/</span>kardon'
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav text-uppercase d-flex align-items-center">
            <li className="nav-item px-4">
              <Link className="nav-link fs-7" aria-current="page" to="#">
                products
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link fs-7" to="#">
                about
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link fs-7" to="#">
                blog
              </Link>
            </li>
            <li className="nav-item px-4">
              <Link className="nav-link fs-7" to="#">
                contact
              </Link>
            </li>
            <li className="nav-item ps-3 pe-3">
              <Link className="nav-link active fs-5" to="#">
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
