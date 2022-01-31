import React from "react";
import CaseCard from "./Case Card/CaseCard";
import "./main.css";

export default function Main() {
  const cases = [
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 0,
      images: [
        "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
        "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
        "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
      ],
      price: 25,
    },
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 0,
      images: [
        "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
        "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
        "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
      ],
      price: 25,
    },
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 0,
      images: [
        "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
        "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
        "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
      ],
      price: 25,
    },
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 0,
      images: [
        "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
        "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
        "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
      ],
      price: 25,
    },
    {
      name: "جريمة قتل في يوم الزفاف",
      id: 0,
      images: [
        "https://cdn.salla.sa/lwWeD/q6L6AjhMGrdbGs2yXBB2MekzOCNfr5LyQdciUhmJ.jpg",
        "https://cdn.salla.sa/lwWeD/ICmBBoSzZGKSEkGxohsfNLhE5BUO8bPNKdCBqiKj.jpg",
        "https://cdn.salla.sa/lwWeD/66qZ934Cr44jWDdTnwoCwPMR0Y4NIDMuaHpxOkj8.png",
      ],
      price: 25,
    },
  ];

  return (
    <div className="main">
      {cases.map((cas, index) => {
        return (
          <CaseCard
            key={index}
            id={cas.id}
            imgUrl={cas.images[0]}
            name={cas.name}
            price={cas.price}
          ></CaseCard>
        );
      })}
    </div>
  );
}
