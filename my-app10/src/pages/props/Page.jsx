import React, { useState } from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

function Page({isDark, setIsDark}) {

    return (
        <>
            <main className='page'>
                <Header isDark={isDark}/>
                <Contents isDark={isDark}/>
                <Footer isDark={isDark} setIsDark={setIsDark}/>

            </main>
        </>
    );
}

export default Page;