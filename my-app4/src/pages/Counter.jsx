import React, { useState } from 'react';
import Result from './Result';

function Counter(props) {

    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);
    const [result, setResult] = useState(0);

    const changeVal = (e) => {
        const {id, value} = e.target;
        if(id === 'num01') {
            setNum01(Number(value));
        }else {
            setNum02(Number(value));
        }
    }

    const sumData = () => {
        setResult(num01 + num02);
    }

    return (
        <>
            <main>
                <input type="text" id='num01' value={num01} onChange={changeVal}/>&nbsp;
                <input type="text" id='num02' value={num02} onChange={changeVal}/>&nbsp;
            </main>
            <div>
                <button type='button' onClick={sumData}>더하기</button>
            </div>
            <div>
                <Result count={result}/>
            </div>
        </>
    );
}

export default Counter;