import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import '../assets/styles/components/Header.scss';


const Header = () => {
    //const [darkMode, setDarkMode] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        /*if(darkMode) {
            setDarkMode(false);
        } else if(!darkMode) {
            setDarkMode(true)
        }*/
        /*const changeState = !darkMode;
        setDarkMode(changeState);*/
        //setDarkMode(!darkMode);
        setTheme(!theme);
    }

    return (
        <div className="Header">
            <h1>ReactHooks💚RickAndMorty</h1>
            <div className="Header__actions">
                <button type="button" onClick={handleClick}>
                    {theme ? "Light Mode" : "Dark Mode"}
                </button>
                {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Dark Mode 2" : "Light Mode 2"}
                </button> */}
            </div>
        </div>
    )
}

export default Header;
