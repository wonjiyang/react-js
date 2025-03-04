import React, { useContext, useState } from 'react';
import ContextHeader from './ContextHeader';
import ContextContents from './ContextContents';
import ContextFooter from './ContextFooter';

function ContextPage() {
    return (
        <>
            <main className='page'>
                <ContextHeader/>
                <ContextContents/>
                <ContextFooter/>
            </main>
        </>
    );
}

export default ContextPage;