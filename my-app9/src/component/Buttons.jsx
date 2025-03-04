import React from 'react';
import styled from 'styled-components';

const CommonBtn = styled.button`
    width: 90px;
    height: 36px;
    border: 0.5px solid #aeaeae;
    border-radius: 5px;
    background-color: white;
    color: black;
`
const CustomBtn = styled(CommonBtn)`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.background ? 'white' : 'balck'};
`

function Buttons({children, background}) {
    return (
        <>
            {children && <CustomBtn background={background}>{children}</CustomBtn>}
        </>
    );
}

export default Buttons;