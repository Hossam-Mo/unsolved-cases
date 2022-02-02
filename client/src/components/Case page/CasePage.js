import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../Image Slider/Slider";
import Refrance from "../Refrance/Refrance";
import "./casePage.css";

export default function CasePage() {
  const prames = useParams();
  const oCase = {
    name: "جريمة قتل في يوم الزفاف",
    id: prames.caseID,
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

  return (
    <div className="casePage">
      <Refrance root={"قتل في حفل الزفاف"}></Refrance>
      <div className="casePage_main">
        <div className="casePage_mainTit">
          <h1>{oCase.name}</h1>
          <h3>{oCase.price} JD</h3>
          <p>{oCase.priceDes}</p>
        </div>
        <Slider images={oCase.images}></Slider>
        <div className="casePage_description">
          <p>{oCase.description}</p>
          <ul>
            <li>لا يوجد استبدال واسترجاع</li>
            <li>
              ليمنع نشر تفاصيل القضية او الحل علنيًا لتفادي التعرض لمسائلات
              قانونية
            </li>
            <li>
              للتوصيل داخل السعودية (4-7)يوم عمل خارج السعودية من (7-14)يوم عمل
            </li>
            <li>مستوى صعوبة اللعبة ({oCase.difficulty}/10)</li>
            <li>{oCase.ageRating}+</li>
            <li>السعر شامل الضريبة</li>
          </ul>
        </div>

        <div className="casePage_ordar">
          <div className="casePage_ordarDes">
            <div>
              <h3>السعر</h3>
              <p>شامل الضريبه</p>
            </div>
            <div>
              <h3>{oCase.price}JD</h3>
            </div>
          </div>
          <button>اضافه للسلة</button>
        </div>
      </div>
    </div>
  );
}
