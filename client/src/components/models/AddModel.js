import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { BiAddToQueue } from "react-icons/bi";
import "./addModel.css";
import { Button, TextField } from "@mui/material";
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid lightgray",
  p: 4,
  borderRadius: "15px",
  zIndex: "100000",
};

const oCase = {
  name: "جريمة قتل في يوم الزفاف",
  id: "1",
  images: [
    "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
    "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
    "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
  ],
  price: 25,
  priceDes: "السعر شامل الضريبه",
  description:
    "قضيه لم تحل منذ اكثر من عشرين سنه تم تلفيق مقتل غاده ماسي على ابو جميل مهمتك كـ محقق حل غموض اللغز وكشف الجاني الحقيقي",
  ageRating: "14",
  difficulty: "7",
};

export default function AddModel({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState(0);
  const [priceDes, setPriceDes] = useState("");
  const [description, setDescription] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [difficulty, setDifficulty] = useState("");
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div className="addModel">
          <div onClick={handleClose} className="addModel_close">
            <AiOutlineCloseCircle></AiOutlineCloseCircle>
          </div>
          <BiAddToQueue></BiAddToQueue>
          <h2>Add a Case</h2>
          <form>
            <TextField label="Name" variant="outlined" />
            <TextField label="price" variant="outlined" />
            <TextField label="price description" variant="outlined" />
            <TextField label="description" variant="outlined" />
            <TextField label="Age Rating" variant="outlined" />
            <TextField label="difficulty" variant="outlined" />
            <input
              className="addModel_fileInput"
              name="file"
              id="file"
              type="file"
              multiple
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setImages(e.target.files);
                console.log(e.target.files);
              }}
            ></input>
            <label className="addModel_customFileInput" htmlFor="file">
              <AiOutlineCloudUpload></AiOutlineCloudUpload>
              {images.length < 0 ? (
                <p>Choose a file...</p>
              ) : (
                <p>{`Files selected: ${images.length}`}</p>
              )}
            </label>
            <Button
              onClick={() => {
                console.log(images);
              }}
            >
              Add
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
}
