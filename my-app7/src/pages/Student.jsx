import React from 'react';

function Student(data, dispatch) {

    const changeState = (action, id) => {
        dispatch({type: action, payload: id});
    }

    const stdCss = {
        textDecoration: data.isHere ? 'line-through' : 'none',
        color: data.isHere ? 'gray' : 'black',
    }

    return (
        <>
            <span style={stdCss} onClick={() => changeState('mark', data.id)}>{data.name}</span>&nbsp;
            <button type='button' onClick={() => changeState('del', data.id)}>삭제</button>
        </>
    );
}

export default Student;