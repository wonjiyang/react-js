import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ContextHeader() {

    const {isDark} = useContext(ThemeContext);

    const headerCss = {
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
    }

    return (
        <>
            <header className='header' style={headerCss}>
                <h2>환영합니다 React</h2>
            </header>
        </>
    );
}

export default ContextHeader;