import React from 'react';

function Box({w, h, color}) {
    //배열 구조분해 시 대괄호
    //객체 구조분해 시 중괄호

    const boxCss = {
        width: w,
        height: h,
        backgroundColor: color
    }

    return (
        <>
            <div style={boxCss}></div>
        </>
    );
}

export default Box;