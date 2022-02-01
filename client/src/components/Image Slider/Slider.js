import React, { useState } from "react";
import "./slider.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Slider({ images }) {
  const [current, setCurrnet] = useState(0);

  const nextSlide = () => {
    setCurrnet(current == images.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrnet(current == 0 ? images.length - 1 : current - 1);
  };
  return (
    <>
      <div className="slider">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              className={
                current == index
                  ? "slider_active slider_img"
                  : "slider_unactive slider_img"
              }
            >
              <img src={img}></img>
            </div>
          );
        })}
        <button onClick={nextSlide} className="slider_next">
          <BsArrowRightCircle />
        </button>
        <button onClick={prevSlide} className="slider_prev">
          <BsArrowLeftCircle />
        </button>
      </div>
    </>
  );
}
