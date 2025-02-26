import React from 'react';

function LottoBtn(generateNum, resetNum) {
    return (
        <Fragment>
            <div>
                <button type='button' onClick={generateNum}>로또생성</button>
                <button type='button' onClick={resetNum}>초기화</button>
            </div>
        </Fragment>
    );
}

export default LottoBtn;