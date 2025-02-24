import React, { Fragment } from 'react';
import Box from './Box';
import '../assets/css/square.css';

function Square({boxList}) {
    return (
        <Fragment>
            <main className='main-box'>
               {
                // ?: NULL 체크(없으면 loop 실행 안함)
                boxList?.map((obj, index) => (
                    <Box key={index} w = {obj.w} h = {obj.h} color = {obj.color}/>
                ))
               } 
            </main>
        </Fragment>
    );
}

export default Square;