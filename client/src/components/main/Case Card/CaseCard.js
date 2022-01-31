import React from "react";
import "./caseCard.css";
import { FaOpencart } from "react-icons/fa";

export default function CaseCard({ imgUrl, id, name, price }) {
  return (
    <div className="caseCard">
      <div className="caseCard_img">
        <img alt={name} src={imgUrl}></img>
      </div>
      <h3>{name}</h3>
      <div className="caseCard_prise">
        <FaOpencart></FaOpencart>
        <h4>{price} JD</h4>
      </div>
    </div>
  );
}
