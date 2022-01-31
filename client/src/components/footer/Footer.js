import React from "react";
import "./footer.css";
import { FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { RiSnapchatLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>Who are we?</h2>
        <p>
          Test your ability to solve mysteries by solving cases and be your own
          detective.
        </p>
      </div>
      <div>
        <h2>Contact us</h2>
        <div className="footer_icons">
          <div>
            <FaInstagram></FaInstagram>
          </div>
          <div>
            <FaTiktok></FaTiktok>
          </div>
          <div>
            <FaSnapchatGhost></FaSnapchatGhost>
          </div>
        </div>
      </div>
    </div>
  );
}
