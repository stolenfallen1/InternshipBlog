import { useEffect, useState } from "react";
import "../styles/Collection.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
        "https://internshipblogapi.onrender.com/get"
      );
      setData(result.data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="collection">
      {data.map((datas) => (
        <Link to={`/Collections/${datas.id}`} key={datas.id}>
          <div className="image-container" key={datas.id}>
            <img src={datas.image} className="images" />
            <div className="overlay">
              <p className="overlay-title">{datas.title}</p>
              <p className="overlay-text">Learn More</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionContent;
