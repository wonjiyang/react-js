import React from 'react';
import styled, {css} from 'styled-components';

const CustomButton = styled.button`
    width : 90px;
    height : 36px;
    border : 0.5px solid #eeeeee;
    border-radius: 5px;
    background-color: white;
    color: black;
    margin: 0 5px;


    ${ p => p.$primary && css`
        background-color :  navy ;
        color : white;
     `}

     ${ p => p.$resets && css`
        background-color :  #c8c6c6 ;
        color : white;
     `}
`
function Buttons({children, event,  ...props}) {
    return (
        <>
            <CustomButton {...props} onClick={event}>{children}</CustomButton>
        </>
    );
}

export default Buttons;