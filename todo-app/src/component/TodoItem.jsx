import React from 'react';
import styled from 'styled-components';

const ItemSection = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #f0f0f0;
`

const TodoBox = styled.div`
    flex: ${p => p.scale || 1};
    text-align: ${p => p.align || 'left'};
`

function TodoItem(props) {
    return (
        <>
            <ItemSection>
                <TodoBox scale={0.5}>
                    <input type="checkbox"></input>
                </TodoBox>
                <TodoBox scale={4.5}>
                    <span>1</span>
                </TodoBox>
                <div>
                    {new Date().toLocaleDateString()}
                </div>
                <TodoBox scale={1} align={'right'}>
                    <button className='btn btn-secondary'>삭제</button>
                </TodoBox>
            </ItemSection>
        </>
    );
}

export default TodoItem;