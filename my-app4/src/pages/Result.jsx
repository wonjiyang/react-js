import React from 'react';

function Result(props) {
    return (
        <>
            <div>결과: </div>
            <h2>{props.count}</h2>
        </>
    );
}

export default Result;