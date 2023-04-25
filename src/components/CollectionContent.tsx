import { useEffect, useState } from "react";
import "../styles/Collection.css";
import axios from "axios";

interface Type {
  id: string;
  image: string;
  title: string;
}

const CollectionContent = () => {
  const [data, setData] = useState<Type[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get(
        "https://internship-blog-api.vercel.app/get"
      );
      setData(result.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="collection">
      {data.map((datas) => (
        <div className="image-container" key={datas.id}>
          <img src={datas.image} className="images" />
          <div className="overlay">
            <p className="overlay-title">{datas.title}</p>
            <p className="overlay-text">Learn More</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionContent;
