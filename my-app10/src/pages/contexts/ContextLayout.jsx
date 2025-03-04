import React, { useState } from 'react';
import '../../assets/css/common.css';
import { ThemeContext } from './ThemeContext';
import ContextPage from './ContextPage';

function ContextLayout(props) {

 const [isDark, setIsDark] = useState(false);

    return (
        <>
            <ThemeContext.Provider value={{isDark, setIsDark}}>
                <ContextPage/>
            </ThemeContext.Provider>
        </>
    );
}

export default ContextLayout;