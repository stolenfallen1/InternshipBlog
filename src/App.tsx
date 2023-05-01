import { useState, useEffect, CSSProperties } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/Main.css";
import { ClimbingBoxLoader } from "react-spinners";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Views/Hero";
import Home from "./Views/Home";
import Collections from "./Views/Collections";
import CollectionDetails from "./components/CollectionDetails";

const override: CSSProperties = {
  backgroundColor: "#000",
  width: "100vw",
  height: "100vh",
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color="#fff" cssOverride={override} size={50} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Collections" element={<Collections />} />
            <Route path="/Collections/:id" element={<CollectionDetails />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
