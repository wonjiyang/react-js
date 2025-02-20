import React, { useState } from 'react';

function StatePage_exam(props) {

    const [result, setResult] = useState(0);
    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);

    const addBtn = () => {
        const sum = num01+num02;
        setResult(sum);
        alert('합: ' + sum);
    }

    const changeValue = (evt) => {
        console.log(evt.target.id, evt.target.value);
        if(evt.target.id === 'num01') {
            setNum01(Number(evt.target.value));
        }else if(evt.target.id === 'num02') {
            setNum02(Number(evt.target.value));
        }
    }

    return (
        <>
            <main>
                <div className='counter'>
                    <span>{result}</span>
                </div>
                <div>
                    <input type='number' id="num01" value={num01} onChange={changeValue}/>&nbsp;
                    <input type='number' id="num02" value={num02} onChange={changeValue}/>&nbsp;
                </div>
                <div>
                    <button type='button' onClick={addBtn}>결과</button>
                </div>
            </main>
        </>
    );
}

export default StatePage_exam;