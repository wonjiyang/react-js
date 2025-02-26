import React, { useMemo, useReducer, useRef, useState } from 'react';
import Student from './Student';


function StudentMain(props) {
    
    let stdId = useRef(1);
    const reducer = (state, action) => {
        switch(action.type) {
            case 'add': {
                const newBe = {
                    id: stdId.current++,
                    name: action.payload,
                    isHere: false
                }
                console.log(newBe)
                return {
                    total: state.total + 1,
                    list: [...state.list, newBe]
                }
            }
            case 'del': 
                return {
                    total: state.total - 1,
                    list: state.list.filter(obj => obj.id != action.payload)
                }
            case 'mark':
                return {
                    total: state.total,
                    list: state.list.map(obj => {
                        if(obj.id == action.payload) {
                            obj.isHere = !obj.isHere
                        }
                        return obj;
                    })
                }
            default: return state;
        }
    }

    
    const init = useMemo(() => {
        return {
            total: 1,
            list: [
                {
                    id: stdId.current++,
                    name: '김철수',
                    isHere: false
                }
            ]
        }
    }, []);
    const stData = init;

    const [myName, setMyName] = useState('');
    const [stdInfo, dispatch] = useReducer(reducer, stData);

    const addStudent = (e) => {
        dispatch({type: 'add', payload: myName})
    }

    return (
        <>
            <main className='container'>
                <header>
                    <h2>학생 관리 노트</h2>
                </header>
                <section>
                    <p>전체 학생 수: {stdInfo.total}</p>
                </section>
                <section>
                    <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)}/>
                    <button type='button' onClick={addStudent}>학생 등록</button>
                </section>
                <section>
                    {
                        stdInfo.list.map(
                            std => <Student key={std.id} data={std} dispatch={dispatch}/>
                        )
                    }
                </section>
            </main>
        </>
    );
}

export default StudentMain;