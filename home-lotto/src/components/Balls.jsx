import React from 'react';
import styled from 'styled-components';

const LottoBalls = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    color: ${(p)=> p.background && 'white' || 'black'};
    background-color: ${(p)=> p.background || 'white'};
    border: ${(p)=> p.background || '1px solid black'};
`


function Balls({children, color}) {
    return (
        <>
         <LottoBalls background={color}>{children}</LottoBalls>   
        </>
    );
}

export default Balls;