import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  const [isDarkMode, setIsDarkMdoe] = useState(false);

  const toggleTheme = () => {
    setIsDarkMdoe((prevState) => !prevState);
  };

  return (
    <div className="view-home">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className={`main-content ${isDarkMode ? "dark-mode" : ""}`}>
        <h1 className="main-header">
          The key to pursuing excellence is to embrace an organic, long term
          learning process, and not to live in a shell of static, safe
          mediocrity. Usually, growth comes at the expense of previous comfort
          or safety.
        </h1>
        <Link to="/Collections" className="home-button">
          Collections
        </Link>
      </div>
    </div>
  );
};

export default Home;
