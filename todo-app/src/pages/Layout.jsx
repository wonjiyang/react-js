import React, { Fragment, useRef, useState } from 'react';
import '../assets/css/layout.css';
import Header from '../component/Header';
import Editor from '../component/Editor';
import TodoList from '../component/TodoList';

function Layout(props) {

    const [todoList, setTodoList] = useState({});
    const workId = useRef(0);

    return (
        <Fragment>
            <main className="main">
                <Header/>
                <Editor/>
                <TodoList/>
            </main>
        </Fragment>
    );
}

export default Layout;