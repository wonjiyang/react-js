import React from 'react';

function Header({isDark}) {

    const headerCss = {
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'while' : 'black'
    }

    return (
        <>
            <header className='header' style={headerCss}>
                <h2>환영합니다 React</h2>
            </header>
        </>
    );
}

export default Header;