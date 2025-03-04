import React from 'react';

function Footer({isDark, setIsDark}) {

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

export default Footer;