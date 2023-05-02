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
    <div className="flex flex-col items-center justify-center xl:flex-row">
      {data && (
        <>
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="px-5 object-cover max-w-lg h-auto mb-4 pt-8 custom-600:max-w-md custom-500:max-w-sm custom-500:px-3"
            />
          </div>
          <div>
            <h2 className="text-4xl xl:text-5xl lg:text-5xl font-bold mb-5 tracking-tighter text-center">
              {data.title}
            </h2>
            <p className="text-lg max-w-4xl leading-relaxed text-justify px-5 lg:px-10">
              {data.content}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionDetails;
