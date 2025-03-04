import React, { useState } from 'react';
import Page from './Page';
import '../../assets/css/common.css';

function Layout(props) {

    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <Page isDark={isDark} setIsDark={setIsDark}/>
        </>
    );
}

export default Layout;