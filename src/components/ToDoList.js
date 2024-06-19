import TodoForm from './ToDoForm';
import TodoList from './ToDoListt';
import React, { useState } from "react";
import { Divider, List, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import './ToDoList.css';


function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div className="App">
            <h1>To Do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}


export default ToDoList;
/*
function ToDoList() {
    const [data, setData] = useState([

    ]);
    const [newData, setNewData] = useState('');

    function add() {
        if (newData.trim() !== "") {
            setData([...data, newData]);
            setNewData("");
        }
    }

    function getValue(event) {
        if (event.key === 'Enter') {
            add();
        }
    }

    function handleInputChange(event) {
        setNewData(event.target.value);
    }

    return (
        <div className="to-do-list">
            <h2>To-Do List</h2>
            <Input
                type="text"
                placeholder="Give text"
                value={newData}
                onChange={handleInputChange}
                onKeyDown={getValue}
                className="input-box"
            />
            <Button type="primary" onClick={add} className="add-button">
                Add
            </Button>
            <Divider orientation="left">To-Do Items</Divider>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item className="list-item">{item}</List.Item>}
            />
        </div>
    );
}


export default ToDoList;
*/



