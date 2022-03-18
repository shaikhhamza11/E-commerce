import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header flex align-center justify-sb p-2-5 fw-bold">
      <NavLink to="/" className="navbar-brand fs-3">
        SportsKart
      </NavLink>
      <nav className="Navbar">
        <ul className="flex align-center justify-sb p-2">
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              <i className="fa-solid fa-cart-shopping fa-2x"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              <i className="fa-solid fa-heart fa-2x"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className={(navData) =>
                navData.isActive ? "active fw-semi-bold" : "fw-semi-bold"
              }
            >
              Sign-up
            </NavLink>{" "}
          </li>
          <i className="close-navbar fa-solid fa-xmark fa-1x" id=""></i>
        </ul>
      </nav>
      <div className="hamburger">
        <i className="fa-solid fa-bars" id="bar"></i>
      </div>
    </header>
  );
}
