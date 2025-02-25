import React, { useEffect, useState } from 'react';

function UseEffect(props) {

    const [count, setCount] = useState(0);

    //화면이 보여질 때 한 번은 무조건 실행, 콜백함수(javascript 시작함수 또한 콜백함수)
    //1. 함수가 Mount될 때
    useEffect(() => {
        console.log('useEffect 호출1');
    });
    //2. 특정조건에서만 업데이트될 때(의존성 부여)
    //빈 배열은 대상이 없을 뿐 의존성은 있음, 한 번만 실행
    useEffect(() => {
        console.log('useEffect 호출2');
    },[]);
    //3. 함수가 unMount될 때(return 없으면 실행안됨, 필수가 아닌 옵션)
    
    const addData = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    
    const miusData = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <>
            <div>카운트: {count}</div>
            <span>
                <button type='button' onClick={addData}>더하기</button>&nbsp;
                <button type='button' onClick={miusData}>빼기</button>
            </span>
        </>
    );
}

export default UseEffect;