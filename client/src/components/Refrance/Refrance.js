import React from "react";
import "./refrance.css";
import { FaHome } from "react-icons/fa";
import { BsArrowBarRight } from "react-icons/bs";

import { Link } from "react-router-dom";
export default function Refrance({ root }) {
  return (
    <div className="refrance">
      <Link to="/">
        <div className="refrance_home">
          <FaHome></FaHome>
          <h3>Home</h3>
        </div>
      </Link>

      {root && (
        <div className="refrance_page">
          <BsArrowBarRight></BsArrowBarRight> {root}
        </div>
      )}
    </div>
  );
}
