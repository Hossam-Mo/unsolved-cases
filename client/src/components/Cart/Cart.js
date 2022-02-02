import React from "react";
import Refrance from "../Refrance/Refrance";
import "./cart.css";

export default function Cart() {
  const arr = [
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 1,
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
      counter: 1,
    },
  ];

  return (
    <div className="cart">
      <Refrance root={"Cart"}></Refrance>
      <div className="cart_body">
        <div className="cart_box">
          {arr.map((item) => {
            return (
              <div className="cart_item">
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
                  <button>-</button>
                  <div>
                    <h2>1</h2>
                  </div>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
