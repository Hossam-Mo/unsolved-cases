import React from "react";
import "./nav.css";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";

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
          <BsSearch></BsSearch>
        </div>
        <div>
          <FaOpencart></FaOpencart>
        </div>
      </div>
    </div>
  );
}
