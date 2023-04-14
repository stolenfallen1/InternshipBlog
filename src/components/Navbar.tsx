import React from 'react'
import Switch from 'react-switch'
import '../styles/Navbar.css'

interface Nav {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Navbar = ({ isDarkMode, toggleTheme}: Nav) => {
    return (
        <div>
            <nav className='nav-container'>
                <Switch
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </nav>
        </div>
    )
}

export default Navbar