import React, { useState } from 'react';
import Timer from './Timer';

function TimerMain(props) {

    const [show, setShow] = useState(false);

    return (
        <>
            {show && <Timer/>}
            {
                show ? <button type='button' onClick={() => setShow(!show)}>숨기기</button>
                    : <button type='button' onClick={() => setShow(!show)}>보이기</button>
            }
        </>
    );
}

export default TimerMain;