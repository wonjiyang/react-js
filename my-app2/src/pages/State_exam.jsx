import React from 'react';

function State_exam(props) {

    let count = 0;

    const addCount = () => {
        count++;
        console.log('증가: ', count);
    }
    const minsCount = () => {
        count--;
        console.log('감소: ', count);
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

export default State_exam;