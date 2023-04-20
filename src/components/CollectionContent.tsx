import { useEffect, useState } from "react";
import "../styles/Collection.css";
import axios from "axios";

interface Type {
  id: string;
  image: string;
}

const CollectionContent = () => {
  const [data, setData] = useState<Type[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get("https://internship-blog-api.vercel.app/get")
      setData(result.data)
    }
    fetchEvents()
  }, [])

  return (
    <div className="collection">
      {data.map((datas) => (
        <div className="image-container" key={datas.id}>
          <img src={datas.image} className="images" />
        </div>
      ))}
    </div>
  );
};

export default CollectionContent;
