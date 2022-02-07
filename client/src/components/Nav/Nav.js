import React, { useState } from "react";
import "./nav.css";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import SignModel from "../models/SignModel";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";
import { signOut_user } from "../../redux/actionTypes";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });
  const handleOpen = () => setOpen(true);
  const sign_Out = () => {
    signOut(auth)
      .then((res) => {
        dispatch({ type: signOut_user.type });
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="nav">
      <SignModel open={open} setOpen={setOpen}></SignModel>
      <Link to="/">
        <img
          className="nav_logo"
          src="https://cdn.salla.sa/lwWeD/GSMzWE31vr8hUCFGnu1g9wjfiLqyMIQaGaIQA1Ew.png"
        ></img>
      </Link>
      <div className="nav_icons">
        {user ? (
          <div onClick={sign_Out}>
            <BiLogOut></BiLogOut>
          </div>
        ) : (
          <div onClick={handleOpen}>
            <BsPerson></BsPerson>
          </div>
        )}
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
