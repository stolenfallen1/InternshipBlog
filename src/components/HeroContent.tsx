import { Link } from "react-router-dom";
import "../styles/Hero.css";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">INTERNSHIP JOURNEY</h1>
      <p className="hero-text">
        <TypeAnimation
          sequence={["Eat. Sleep. Code", 2500, "Live. Laugh. Love", 2500]}
          repeat={Infinity}
        />
      </p>
      <Link to="/Home" className="hero-button">
        Learn More
      </Link>
    </div>
  );
};

export default HeroContent;
