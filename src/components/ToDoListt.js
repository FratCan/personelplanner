import React from 'react';

function TodoListt({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>Görev: {todo.task}</p>
          <p>Başlangıç Tarihi: {todo.startDate}</p>
          <p>Bitiş Tarihi: {todo.endDate}</p>
        </li>
      ))}
    </ul>
  );
}

export default TodoListt;
