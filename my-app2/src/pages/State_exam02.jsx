import React, { useState } from 'react';

function State_exam02(props) {

    const [count, setCount] = useState(0)

    const addCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        console.log('증가: ', newCount);
    }
    const minsCount = () => {
        const newCount = count - 1;
        setCount(newCount);
        console.log('감소: ', newCount);
    }

    return (
        <>
            <main>
                <div>
                    <span>결과: {count}</span>
                </div>
                <div>
                    <button type='button' onClick={addCount}>증가</button><br />
                    <button type='button' onClick={minsCount}>감소</button><br />
                </div>
            </main>
        </>
    );
}

export default State_exam02;