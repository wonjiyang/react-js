import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const ListSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

const Search = styled.div`
    margin-bottom: 30px;
`

const SearchInput = styled.input`
    border: none;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 20px;
`

const TodoListBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

function TodoList(props) {
    return (
        <>
            <ListSection>
                <div>
                    <h4>TodoList</h4>
                </div>
                <Search>
                    <div className="row">
                        <div className="col-10">
                            <SearchInput type="text" className='form-control' placeholder='입력하세요.'/>
                        </div>
                        <div className='col-2' style={{textAlign: 'right'}}>
                            <button className='btn btn-success'>검색</button>
                        </div>
                    </div>
                </Search>
                <TodoListBox>
                    <TodoItem/>
                </TodoListBox>
            </ListSection>
        </>
    );
}

export default TodoList;