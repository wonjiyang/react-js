import React, { Fragment, useRef, useState } from 'react';
import '../assets/css/layout.css';
import Header from '../component/Header';
import Editor from '../component/Editor';
import TodoList from '../component/TodoList';
import { TodoContext } from '../component/TodoContext';

function Layout(props) {

    const [todoList, setTodoList] = useState([]);
    const workId = useRef(1);

    //할 일 추가
    const addSchedule = (schedule) => {
        const newTodo = {
            id: workId.current++,
            isDone: false,
            schedule: schedule,
            date: new Date().getTime()
        }
        //기존 리스트에 새로운 항목 추가
        setTodoList((privList) => [...privList, newTodo]);
    }

    const updateSchedule = (id) => {
        //map: 콜백함수 실행
        const updatedTodoList = todoList.map(todo => todo.id === id ? {...todo, isDone : !todo.isDone} : todo);
        setTodoList(updatedTodoList);
    }

    const deleteSchedule = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    }

    return (
        <Fragment>
            <main className="main">
                <Header/>
                <TodoContext.Provider value={{todoList, addSchedule, updateSchedule, deleteSchedule}}>
                    <Editor/>
                    <TodoList/>
                </TodoContext.Provider>
            </main>
        </Fragment>
    );
}

export default Layout;