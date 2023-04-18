import { useState } from "react";
import '../styles/Collection.css'
import Navbar from "../components/Navbar";
import CollectionHeader from '../components/CollectionHeader'
import CollectionContent from "../components/CollectionContent";

const Collections = () => {
    const [isDarkMode, setIsDarkMdoe] = useState(false)

    const toggleTheme = () => {
        setIsDarkMdoe(prevState => !prevState);
    };

    return (
        <>
            <main className="view-collection">
                <CollectionHeader/>
                <CollectionContent/>
            </main>
        </>
    )
}

export default Collections