import { useEffect, useState } from "react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mx-4 md:mx-8 lg:mx-16">
      {data.map((datas) => (
        <Link to={`/Collections/${datas.id}`} key={datas.id}>
          <div className="relative overflow-hidden cursor-pointer">
            <img
              src={datas.image}
              className="w-full h-auto rounded-md filter brightness-55"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-450 ease-in-out bg-black bg-opacity-60 hover:opacity-100">
              <p className="text-white text-3xl font-bold mb-2">
                {datas.title}
              </p>
              <p className="text-white text-3xl font-script">Learn More</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionContent;
