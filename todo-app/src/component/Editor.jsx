import React from 'react';
import styled from 'styled-components';

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
    return (
        <>
            <EditorSection className='mt-4'>
                <ItemBox scale = {5}>
                    <input type="text" className='form-control'/>
                </ItemBox>
                <ItemBox scale = {1}>
                    <button type='button' className='btn btn-primary'>추가</button>
                </ItemBox>
            </EditorSection>
        </>
    );
}

export default Editor;