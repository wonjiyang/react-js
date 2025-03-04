import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ContextFooter() {

    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    const footerStyle = {
        backgroundColor : isDark ? 'black' : 'lightgray'
    }

    return (
        <>
            <footer className='footer' style={footerStyle}>
                <button className='button' onClick={toggleTheme}>ModeChange</button>
            </footer>
        </>
    );
}

export default ContextFooter;