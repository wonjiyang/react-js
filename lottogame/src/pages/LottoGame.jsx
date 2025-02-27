import React, { useState } from 'react';
import LottoBtn from './LottoBtn';
import LottoLayout from './LottoLayout';

function LottoGame(props) {

    const [lottoNumbers, setLottoNumbers] = useState([]);

    //로또 랜덤숫자 불러오기
    const generateLottoNumbers = () => {
        const lottoSet = new Set();
        while (lottoSet.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            lottoSet.add(randomNumber);
        }
        return Array.from(lottoSet).sort((a, b) => a - b);
    };

    //로또 생성
    const generateNum = () => {
        const newLottoNumbers = Array.from({ length: 5 }, () => generateLottoNumbers());
        setLottoNumbers(newLottoNumbers);
    }

    //초기화
    const resetNum = () => {
        setLottoNumbers([]);
    }

    return (
        <>
            <div>
                <h1>로또번호 생성기</h1>
            </div>
            <LottoLayout lottoNumbers={lottoNumbers}/>
            <LottoBtn generateNum={generateNum} resetNum={resetNum}/>
        </>
    );
}

export default LottoGame;