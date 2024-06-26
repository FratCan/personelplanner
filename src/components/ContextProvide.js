import React, { createContext, useState } from 'react';

// Create a context for the todos
export const TodoContext = createContext();

const ContextProvide = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default ContextProvide;
