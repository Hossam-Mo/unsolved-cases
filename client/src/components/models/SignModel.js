import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { BsPersonPlus } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./signModel.css";
import { auth, googleProvider } from "../../firebase/firebase_config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signIn_user } from "../../redux/actionTypes";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  p: 4,
  borderRadius: "15px",
};

export default function SignModel({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        dispatch({ type: signIn_user.type, user: result });
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="signInModel_main">
          <BsPersonPlus></BsPersonPlus>
          <h2>Sign in</h2>
          <button onClick={signIn}>
            <div>
              <FcGoogle></FcGoogle>
              <h3>Sign in with google</h3>
            </div>
          </button>
        </div>
      </Box>
    </Modal>
  );
}
