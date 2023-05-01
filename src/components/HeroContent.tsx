import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-montserrat">
      <h1 className="text-6xl text-white mb-6">INTERNSHIP JOURNEY</h1>
      <p className="text-4xl italic text-white mb-6">
        <TypeAnimation
          sequence={["Eat. Sleep. Code", 2500, "Live. Laugh. Love", 2500]}
          repeat={Infinity}
        />
      </p>
      <Link
        to="/Home"
        className="text-2xl text-white bg-transparent border border-white rounded-md px-5 py-3 transition duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HeroContent;
