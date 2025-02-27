import React, { Fragment, useMemo, useState } from 'react';

function MemoTest(props) {

    const [numberList, setNumberList] = useState([]);
    const [number, setNumber] = useState(0);

    const getAvg = () => {
        console.log('평균 계산');
        if(numberList.length == 0) {
            return 0;
        }
        const sum = numberList.reduce((stackValue, now) => stackValue + now);
        return sum / numberList.length;
    }

    const average = useMemo(() => getAvg(), [numberList]);

    const addNumber = () => {
        console.log('리스트 추가');
        const val = Number(number);
        if(val > 0)
        {
            setNumberList((prev) => [...prev, val]);
            setNumber(0);//기존 값 초기화
        }
    }

    return (
        <>
            <main>
                <div>
                    <span>평균 {average}</span>
                </div>
                <div>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    <button type='button' onClick={addNumber}>추가</button>
                </div>
                <div>
                    {
                        numberList?.map((value, index) => 
                            <Fragment key={index}>
                            <span key={index}>{value}</span> 
                            {index !== (numberList.length -1) && ','}
                            </Fragment>
                        )
                    }
                </div>
            </main>
        </>
    );
}

export default MemoTest;