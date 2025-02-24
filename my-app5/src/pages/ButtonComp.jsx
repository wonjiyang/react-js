import React, { Fragment } from 'react';

function ButtonComp({addBox, delBox}) {
    return (
        <Fragment>
            <button type='button' onClick={addBox}>추가</button>
            <button type='button' onClick={delBox}>삭제</button>
        </Fragment>
    );
}

export default ButtonComp;