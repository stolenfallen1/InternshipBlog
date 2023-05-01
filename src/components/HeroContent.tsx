import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center font-montserrat">
      <h1 className="text-white mb-6 font-bold tracking-tighter xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl custom-600:text-3xl custom-500:text-3xl">
        INTERNSHIP JOURNEY
      </h1>
      <p className="text-white italic font-light mb-6 xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl custom-600:text-2xl custom-500:text-2xl">
        <TypeAnimation
          sequence={["Eat. Sleep. Code", 1500, "Live. Laugh. Love", 3000]}
          repeat={Infinity}
        />
      </p>
      <Link
        to="/Home"
        className="text-white bg-transparent border border-white rounded-md px-5 py-3 
  transition duration-500 ease-in-out hover:bg-white hover:text-black hover:border-black
  xl:text-2xl lg:py-3 lg:px-4 custom-600:px-3 custom-500:py-2 custom-500:px-2"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HeroContent;
