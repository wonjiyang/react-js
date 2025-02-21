import React, { useState } from 'react';

function Form_exam(props) {

    const [data, setData] = useState({});

    const changeVal = (e) => {
        const {id, value} = e.target
        const updated = {
            ...data,
            //id 안에 있는 것을 꺼내기 위해 []사용
            [id] : value
        }
        setData(updated)
        console.log(updated);
    }

    return (
        <>
            <form>
                <label htmlFor="myName">이름: </label>
                <input type="text" id='myName' name='myName' onChange={changeVal}/>
                <br/>
                <label htmlFor="age">나이: </label>
                <input type="text" id='age' name='age' onChange={changeVal}/>
            </form>
        </>
    );
}

export default Form_exam;