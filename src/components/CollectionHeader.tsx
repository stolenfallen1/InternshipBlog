import "../styles/Collection.css";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";

const CollectionHeader = () => {
  return (
    <div>
      <div className="collection-header flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white pb-5 pt-10 tracking-tighter custom-600:text-4xl custom-500:text-3xl">
          COLLECTIONS
        </h1>
        <Link
          to="/"
          className="pb-12 text-white text-2xl transition duration-350 ease-in-out hover:opacity-70 flex items-center custom-600:text-lg custom-500:text-lg"
        >
          <span>Home</span>
          <FiArrowRightCircle className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CollectionHeader;
