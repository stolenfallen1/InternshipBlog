import React from "react";
import "../styles/Collection.css";
import img1 from "../assets/images/img-1.jpeg";
import img2 from "../assets/images/img-2.jpeg";
import img3 from "../assets/images/img-3.jpeg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-5.jpg";
import img6 from "../assets/images/img-6.jpeg";
import img7 from "../assets/images/img-7.jpeg";
import img8 from "../assets/images/img-8.jpg";
import img9 from "../assets/images/img-9.jpeg";
import img10 from "../assets/images/img-10.jpg";

const CollectionContent = () => {
  const data = [
    {
      img: img1,
      title: "Image 1",
    },
    {
      img: img2,
      title: "Image 2",
    },
    {
      img: img3,
      title: "Image 3",
    },
    {
      img: img4,
      title: "Image 4",
    },
    {
      img: img5,
      title: "Image 5",
    },
    {
      img: img6,
      title: "Image 6",
    },
    {
      img: img7,
      title: "Image 7",
    },
    {
      img: img8,
      title: "Image 8",
    },
    {
      img: img9,
      title: "Image 9",
    },
    {
      img: img10,
      title: "Image 10",
    },
  ];

  return (
    <div className="collection">
      {data.map((item, index) => (
        <div className="image-container" key={index}>
          <img src={item.img} alt={item.title} className="images" />
        </div>
      ))}
    </div>
  );
};

export default CollectionContent;
