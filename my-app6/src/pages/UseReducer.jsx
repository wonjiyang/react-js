import React, { useReducer, useState } from 'react';

function UseReducer(props) {

    const bankReducer = (state, action) => {
        console.log('=== 은행 시작 ===');
        switch(action.type) {
            case 'deposit': return state + Number(action.payload);
            case 'widthdraw': return state - Number(action.payload);
            default: return state;
        }
    }

    const [money, setMoney] = useState(0);
    //account: 현재 상태 10000
    //dispatch: useReducer로 bankReducer 연결
    const [account, dispatch] = useReducer(bankReducer, 10000);

    const manageAccount = (action) => {
        //데이터를 줄 때 객체형으로 주기 때문에 {}
        dispatch({type: action, payload: money});
    }

    return (
        <>
            <main>
                <header>
                    <h2>계좌 입출금</h2>
                </header>
                <section>
                    <div>
                        <p>잔고: {account}</p><br />
                        <label htmlFor="money">금액: </label>
                        <input type="text" id='money' value={money} onChange={(e) => setMoney(e.target.value)}/>
                    </div>
                    <div>
                        <button type='button' onClick={() => manageAccount('deposit')}>입금</button>&nbsp;
                        <button type='button' onClick={() => manageAccount('widthdraw')}>출금</button>&nbsp;
                    </div>
                </section>
            </main>
        </>
    );
}

export default UseReducer;