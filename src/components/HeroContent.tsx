import { Link } from "react-router-dom"
import '../styles/Hero.css'

const HeroContent = () => {
    return (
        <div className="hero-container">
            <h1 className="hero-title">INTERNSHIP JOURNEY</h1>
            <p className="hero-text">Eat. Sleep. Code.</p>
            <Link to="/Home" className="hero-button">Learn More</Link>
        </div>
    )
}

export default HeroContent