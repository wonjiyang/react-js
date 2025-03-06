import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { TodoContext } from './TodoContext';

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

    const {todoList} = useContext(TodoContext);
    const [searchList, setSearchList] = useState(todoList);
    const [searchText, setSearchText] = useState('');

    const searchSchedule = useCallback(() => {
        console.log(searchText)
        const filter = todoList.filter((todo) => todo.schedule.includes(searchText));
        setSearchList(filter)
    }, [searchText]);

    const enterKeyEvent = useCallback((e) => {
        if(e.keyCode === 13) {
            searchSchedule();
        }
    },[searchText]);

    //todoList 갱신할 때마다 searchList도 갱신
    useEffect(() => {
        setSearchList(todoList);
    },[todoList]);

    useEffect(() => {
        console.log('test');
    }, [searchSchedule]);

    return (
        <>
            <ListSection>
                <div>
                    <h4>TodoList</h4>
                </div>
                <Search>
                    <div className="row">
                        <div className="col-10">
                            <SearchInput 
                                type="text" 
                                className='form-control' 
                                value={searchText} 
                                onChange={(e) => setSearchText(e.target.value)} 
                                onKeyDown={enterKeyEvent}
                                placeholder='검색어를 입력하세요.'/>
                        </div>
                        <div className='col-2' style={{textAlign: 'right'}}>
                            <button 
                                className='btn btn-success' 
                                onClick={searchSchedule}>검색
                            </button>
                        </div>
                    </div>
                </Search>
                <TodoListBox>
                    {
                        searchList?.map(todo => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))
                    }
                </TodoListBox>
            </ListSection>
        </>
    );
}

export default TodoList;