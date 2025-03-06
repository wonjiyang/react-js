import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from './TodoContext';

const ItemSection = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #f0f0f0;
`

const TodoBox = styled.div`
    flex: ${p => p.scale || 1};
    text-align: ${p => p.$align || 'left'};
`

function TodoItem({todo}) {

    const {updateSchedule, deleteSchedule} = useContext(TodoContext);

    return (
        <>
            <ItemSection>
                <TodoBox scale={0.5}>
                    <input type="checkbox" checked={todo.isDone} onChange={() => updateSchedule(todo.id)}/>
                </TodoBox>
                <TodoBox scale={4.5}>
                    <span style={{
                        textDecoration: todo.isDone? 'line-through' : 'none',
                        color: todo.isDone? 'gray' : 'black'
                    }}>{todo.schedule}</span>
                </TodoBox>
                <TodoBox scale={1}>
                    {new Date(todo.date).toLocaleDateString()}
                </TodoBox>
                <TodoBox scale={1} $align={'right'}>
                    <button className='btn btn-secondary' onClick={() => deleteSchedule(todo.id)}>삭제</button>
                </TodoBox>
            </ItemSection>
        </>
    );
}

export default TodoItem;