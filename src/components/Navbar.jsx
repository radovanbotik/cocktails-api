import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="navlogo">this is cocktails</h2>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </div>
    </div>
  );
}
