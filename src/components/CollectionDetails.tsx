import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Type {
  title: string;
  content: string;
  image: string;
}

const CollectionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Type | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      const result = await axios.get(
        `https://internshipblogapi.onrender.com/get/${id}`
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchCollection();
  }, [id]);

  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <img src={data.image} alt={data.title} />
          <p>{data.content}</p>
        </>
      )}
    </div>
  );
};

export default CollectionDetails;
