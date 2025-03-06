import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from './TodoContext';

const EditorSection = styled.section`
    display: flex;
    gap: 10px;
    flex-direction: row;
`

const ItemBox = styled.div`
    flex: ${p => p.scale || 1};
    text-align: right;
`

function Editor(props) {

    //추가 이벤트
    const {addSchedule} = useContext(TodoContext);
    const [schedule, setSchedule] = useState('');

    const add = (e) => {
        e.preventDefault();
        addSchedule(schedule);
    }

    return (
        <>
            <EditorSection className='mt-4'>
                <ItemBox scale = {5}>
                    <input type="text" className='form-control' value={schedule} onChange={(e) => setSchedule(e.target.value)}/>
                </ItemBox>
                <ItemBox scale = {1}>
                    <button type='button' className='btn btn-primary' onClick={add}>추가</button>
                </ItemBox>
            </EditorSection>
        </>
    );
}

export default Editor;