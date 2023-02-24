import React, { useState } from "react";
import "./Navbar.css";
import "react-simple-typewriter/dist/index";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <span>
            <i className="bi bi-airplane"></i>
            <h1>Yatari</h1>
          </span>

          <label htmlFor="my-checkbox">
            <i className="bi bi-list"></i>
          </label>
          <input type="checkbox" id="my-checkbox" />

          <ul className="nav no-search">
            <li
              className="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              <a href="#">Home</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/booking");
              }}
            >
              <a href="#">Booking</a>
              {' '}
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/airroute");
              }}
            >
              <a href="#">Route</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                navigate("/search");
              }}
            >
              <a href="#">search</a>
            </li>
            <li className="nav-item" onClick={() => {
              navigate("/contactus");
            }}>
              <a href="#">Login</a>
            </li>

            <i className="bi bi-search" id="search-icon"></i>
            <input
              className="search-input"
              type="text"
              placeholder="Search.."
            />
          </ul>
        </nav>
      </div>

      
    </div>
  );
}

export default Navbar;
