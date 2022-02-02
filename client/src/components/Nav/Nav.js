import React from "react";
import "./nav.css";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img
          className="nav_logo"
          src="https://cdn.salla.sa/lwWeD/GSMzWE31vr8hUCFGnu1g9wjfiLqyMIQaGaIQA1Ew.png"
        ></img>
      </Link>
      <div className="nav_icons">
        <div>
          <BsPerson></BsPerson>
        </div>
        <div>
          <BsSearch></BsSearch>
        </div>
        <Link to="/cart">
          <FaOpencart></FaOpencart>
        </Link>
      </div>
    </div>
  );
}
