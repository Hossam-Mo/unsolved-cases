import React from "react";
import "./nav.css";
import { BsPerson, BsCart3 } from "react-icons/bs";

export default function Nav() {
  return (
    <div className="nav">
      <div>
        <img
          className="nav_logo"
          src="https://cdn.salla.sa/lwWeD/GSMzWE31vr8hUCFGnu1g9wjfiLqyMIQaGaIQA1Ew.png"
        ></img>
      </div>
      <div className="nav_icons">
        <div>
          <BsPerson></BsPerson>
        </div>

        <div>
          <BsCart3></BsCart3>
        </div>
      </div>
    </div>
  );
}
