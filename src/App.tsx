import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/Main.css";
import Splashscreen from "./Views/SplashScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Views/Hero";
import Home from "./Views/Home";
import Collections from "./Views/Collections";

function App() {
  const [showSplashscreen, setShowSplashscreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplashscreen(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {showSplashscreen && (
          <div>
            <Splashscreen />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Collections" element={<Collections />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
