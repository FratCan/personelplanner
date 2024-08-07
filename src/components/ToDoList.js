import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList({ todos, setTodos }) {
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringDay, setRecurringDay] = useState('Monday');
  const [recurringStartTime, setRecurringStartTime] = useState('12:00');
  const [recurringEndTime, setRecurringEndTime] = useState('13:00');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: todo.startDate ? new Date(todo.startDate) : null,
        endDate: todo.endDate ? new Date(todo.endDate) : null
      }));
      setTodos(parsedTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && ((startDate && endDate) || isRecurring)) {
      const newTodo = {
        task,
        startDate: isRecurring ? null : new Date(startDate),
        endDate: isRecurring ? null : new Date(endDate),
        isRecurring,
        recurringDay: isRecurring ? recurringDay : null,
        recurringStartTime: isRecurring ? recurringStartTime : null,
        recurringEndTime: isRecurring ? recurringEndTime : null
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
      setIsRecurring(false);
      setRecurringDay('Monday');
      setRecurringStartTime('12:00');
      setRecurringEndTime('13:00');
    }
  };

  const isToday = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate();
  };

  const sortedTodos = [...todos].sort((a, b) => {
    const today = new Date();
    const aIsToday = a.startDate && (isToday(a.startDate) || isToday(a.endDate));
    const bIsToday = b.startDate && (isToday(b.startDate) || isToday(b.endDate));

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return (a.startDate || 0) - (b.startDate || 0);
  });

  return (
    <div className='big-cont'>
      <div className="App">
        <h1>To Do List</h1>
        <div className='inputs'>
          <input className='task-input'
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={isRecurring}
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={isRecurring}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
              />
              Recurring Task
            </label>
          </div>
          {isRecurring && (
            <div>
              <div>
                <label>Day of the Week:</label>
                <select value={recurringDay} onChange={(e) => setRecurringDay(e.target.value)}>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div>
                <label>Start Time:</label>
                <input
                  type="time"
                  value={recurringStartTime}
                  onChange={(e) => setRecurringStartTime(e.target.value)}
                />
              </div>
              <div>
                <label>End Time:</label>
                <input
                  type="time"
                  value={recurringEndTime}
                  onChange={(e) => setRecurringEndTime(e.target.value)}
                />
              </div>
            </div>
          )}
          <button className='add-button' onClick={addTodo}>Add</button>
        </div>
        <ul>
          {sortedTodos.map((todo, index) => (
            <li key={index} className={index === 0 ? 'top-task' : ''}>
              {todo.task} - {todo.isRecurring ? `${todo.recurringDay} ${todo.recurringStartTime}-${todo.recurringEndTime}` : `${todo.startDate.toLocaleDateString()} to ${todo.endDate.toLocaleDateString()}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;


