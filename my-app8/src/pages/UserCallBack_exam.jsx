import React, { useEffect, useState } from 'react';

function UserCallBack_exam(props) {

    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    const upCount = () => {
        setCount(count+1);
    }
    const upCount2 = () => {
        setCount2(count2+1);
    }
    const printCountLog = () => {
        console.log(count)
    }
    const printCountLog2 = () => {
        console.log(count2)
    }

    useEffect(() => {
        console.log('printCountLod1 실행');
    }, [printCountLog]);
    useEffect(() => {
        console.log('printCountLod2 실행');
    }, [printCountLog2]);

    return (
        <>
            <div>
                <p>카운트 1: {count}</p>
                <p>카운트 2: {count2}</p>
            </div>
            <button onClick={upCount}>증가1</button>
            <button onClick={upCount2}>증가2</button>
        </>
    );
}

export default UserCallBack_exam;