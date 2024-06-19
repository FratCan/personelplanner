import React, { createContext, useState } from 'react';

const ToDoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <ToDoContext.Provider value={{ todos, addTodo }}>
            {children}
        </ToDoContext.Provider>
    );
};

export { ToDoContext, TodoProvider };
