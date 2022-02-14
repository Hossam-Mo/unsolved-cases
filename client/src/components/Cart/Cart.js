import React, { useEffect } from "react";
import Refrance from "../Refrance/Refrance";
import "./cart.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cart_itemDelete, dsc_count, inc_count } from "../../redux/actionTypes";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.cart;
  });

  const incCount = (item) => {
    console.log("click");
    dispatch({ type: inc_count.type, payload: item });
  };
  const dscCount = (item) => {
    if (item.count > 1) dispatch({ type: dsc_count.type, payload: item });
  };

  const deleteItem = (item) => {
    dispatch({ type: cart_itemDelete.type, payload: item });
  };

  const orderEmail = () => {};
  return (
    <div className="cart">
      <Refrance root={"Cart"}></Refrance>
      <div className="cart_body">
        <div className="cart_box">
          {products.length > 0 ? (
            products.map((item) => {
              return (
                <div key={item.id} className="cart_item">
                  <div
                    onClick={() => {
                      deleteItem(item);
                    }}
                    className="cart_itemDelete"
                  >
                    <AiOutlineCloseCircle></AiOutlineCloseCircle>
                  </div>
                  <div className="cart_itemDesc">
                    <div className="cart_itemImage">
                      <img src={item.images[0]} alt={item.name}></img>
                    </div>
                    <div className="cart_itemName">
                      <h2>{item.name}</h2>
                      <h3>{item.price} JD</h3>
                    </div>
                  </div>
                  <div className="cart_count">
                    <button
                      onClick={() => {
                        dscCount(item);
                      }}
                    >
                      -
                    </button>
                    <div>
                      <h2>{item.count}</h2>
                    </div>
                    <button
                      onClick={() => {
                        incCount(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cart_empty">
              <h2>The Cart is empty</h2>
              <FaHeartBroken></FaHeartBroken>
              <Link to="/">Home</Link>
            </div>
          )}
          <button className="cart_checkOut">Check Out</button>
        </div>
      </div>
    </div>
  );
}
