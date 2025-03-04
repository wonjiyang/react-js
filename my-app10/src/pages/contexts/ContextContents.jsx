import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ContextContents() {

    const {isDark} = useContext(ThemeContext);

    const contentsCss = {
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black'
    }

    return (
        <>
            <main className='content' style={contentsCss}>
                <h3>좋은 하루 보내세요</h3>
            </main>
        </>
    );
}

export default ContextContents;