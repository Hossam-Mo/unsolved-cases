import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { BiAddToQueue } from "react-icons/bi";
import "./addModel.css";
import { Button, TextField } from "@mui/material";
import { AiOutlineCloseCircle, AiOutlineCloudUpload } from "react-icons/ai";
import db, { storage } from "../../firebase/firebase_config";
import { addDoc, collection, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";
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
  overflowY: "scroll",
  maxHeight: "80vh",
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
  const [uploadedImages, setUploadedImages] = useState([]);
  const [price, setPrice] = useState("");
  const [priceDes, setPriceDes] = useState("");
  const [description, setDescription] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [prograss, setPrograss] = useState(0);

  const imagesUpload = () => {
    if (images.length === 0) return;

    const newImagesArr = Object.values(images);

    newImagesArr.forEach((img) => {
      const storageRef = ref(storage, `/imeges/${img.name} ${Math.random()}  `);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPrograss(prog);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((res) => {
              setUploadedImages((pre) => {
                return [...pre, res];
              });
              setPrograss(0);
              return true;
            })
            .catch((err) => {
              console.log(err);
              return false;
            });
        }
      );
    });
  };

  useEffect(() => {
    console.log(uploadedImages);
  }, [uploadedImages]);

  const onSubmit = () => {
    if (
      name === "" ||
      price === "" ||
      priceDes === "" ||
      description === "" ||
      difficulty === "" ||
      ageRating === "" ||
      images.length === 0
    ) {
      alert("Please fill up every felid");
    } else {
      addDoc(collection(db, "cases"), {
        name,
        price,
        priceDes,
        description,
        difficulty,
        ageRating,
        uploadedImages,
      })
        .then((res) => {
          console.log(res);
          setAgeRating("");
          setName("");
          setDescription("");
          setPrice("");
          setDifficulty("");
          setPriceDes("");
          setImages([]);
          setUploadedImages([]);

          alert("The case has been added");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
            <TextField
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Name"
              variant="outlined"
            />
            <TextField
              type={"number"}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              label="price"
              variant="outlined"
            />
            <TextField
              value={priceDes}
              onChange={(e) => {
                setPriceDes(e.target.value);
              }}
              label="price description"
              variant="outlined"
            />
            <TextField
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              label="description"
              variant="outlined"
            />
            <TextField
              value={ageRating}
              onChange={(e) => {
                setAgeRating(e.target.value);
              }}
              label="Age Rating"
              variant="outlined"
            />
            <TextField
              value={difficulty}
              onChange={(e) => {
                setDifficulty(e.target.value);
              }}
              label="difficulty"
              variant="outlined"
            />
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
            {prograss > 0 && <div>Upolad: {prograss}%</div>}
            <Button onClick={onSubmit}>Add</Button>
          </form>

          <button onClick={imagesUpload}>xxx</button>
        </div>
      </Box>
    </Modal>
  );
}
