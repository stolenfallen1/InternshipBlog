import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Switch from "react-switch";
import "../styles/CollectionDetails.css";

interface Type {
  title: string;
  content: string;
  image: string;
}

const CollectionDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Type | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center xl:flex-row ${
        isDarkMode ? "dark-mode" : ""
      }`}
    >
      {data && (
        <>
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="image px-5 object-cover max-w-lg h-auto mb-4 pt-8 brightness-75 custom-600:max-w-md custom-500:max-w-sm custom-500:px-3"
            />
          </div>
          <div>
            <h2 className="text-4xl xl:text-5xl lg:text-5xl font-bold mb-5 tracking-tighter text-center">
              {data.title}
            </h2>
            <p className="text-lg max-w-4xl leading-relaxed text-justify px-5 lg:px-10">
              {data.content}
            </p>
            <div className="flex items-center justify-center pt-5">
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedIcon={false}
                uncheckedIcon={false}
              />
              <Link
                to="/Collections"
                className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back to Collections
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionDetails;
