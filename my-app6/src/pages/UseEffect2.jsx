import React, { useEffect, useState } from 'react';

function UseEffect2(props) {

    const [num01, setNum01] = useState(0);
    const [num02, setNum02] = useState(0);
    const [result, setResult] = useState(0);

    //input 값을 바꾸거나 곱하기 버튼을 누르면 무조건 실행
    useEffect(() => {
        console.log('useEffect 호출1');
    });
    //현재 의존성을 부여한 result 값이 변화하는 곱하기 버튼을 누를 시에만 실행
    useEffect(() => {
        console.log('useEffect 호출2');
    },[result]);

    const multiple = (e) => {
        const m = Number(num01) * Number(num02);
        setResult(m);
    }

    return (
        <>
            <h2>곱하기 만들기</h2>
            <div>
                <input type="text" onChange={(e) => setNum01(e.target.value)}/> X
                <input type="text" onChange={(e) => setNum02(e.target.value)}/> =
                <span>{result}</span>
            </div>
            <span>
                <button type='button' onClick={multiple}>곱하기</button>&nbsp;
            </span>
        </>
    );
}

export default UseEffect2;