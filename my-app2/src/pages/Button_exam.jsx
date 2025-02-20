import React from 'react';

function Button_exam(props) {

    const hiBtn = () => {
        alert('안녕하세요');
    }
    const byeBtn = (str) => {
        alert(str);
    }

    return (
        <>
            <button type='button' onClick={hiBtn}>안녕</button>&nbsp;
            <button type='button' onClick={() => byeBtn('good bye')}>잘가</button>
        </>
    );
}

export default Button_exam;