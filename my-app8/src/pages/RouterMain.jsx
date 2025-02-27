import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Main from './Main';
import Home from './Home';

function RouterMain(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default RouterMain;