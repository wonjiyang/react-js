import React, { useEffect } from 'react';

function Timer(props) {

    //한 번만 실행되도록 설정
    useEffect(() => {
        //타이머 설정
        //setInterval: 뒤에 있는 시간마다 반복 실행
        const timer = setInterval(() => {
            console.log('타이머 실행 중');
        }, 1000);
        
        //unmount
        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        }
    },[])


    return (
        <>
            <span>타이머 시작</span>
        </>
    );
}

export default Timer;