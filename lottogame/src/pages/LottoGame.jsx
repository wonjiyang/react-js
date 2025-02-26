import React from 'react';
import LottoBtn from './LottoBtn';
import LottoLayout from './LottoLayout';

function LottoGame(props) {

    //로또 생성
    const generateNum = () => {

    }

    //초기화
    const resetNum = () => {

    }

    return (
        <>
            <LottoLayout/>
            <LottoBtn generateNum={generateNum} resetNum={resetNum}/>
        </>
    );
}

export default LottoGame;