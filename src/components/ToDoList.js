/*
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
*/
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


/*
import React, { useState } from 'react';
import './ToDoList.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const addTodo = () => {
    if (task && day && month && year) {
      const date = new Date(`${year}-${month}-${day}`);
      setTodos([...todos, { task, date }]);
      setTask('');
      setDay('');
      setMonth('');
      setYear('');
    }
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div>
        <input
          type="text"
          placeholder="Mission"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input 
          type="number"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task} - {todo.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
/*
import React, { useState,useEffect  } from 'react';
import './ToDoList.css';


function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
 // Load todos from localStorage on component mount
 useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) {
    // Parse dates back to Date objects
    const parsedTodos = storedTodos.map(todo => ({
      ...todo,
      startDate: new Date(todo.startDate),
      endDate: new Date(todo.endDate)
    }));
    setTodos(parsedTodos);
    console.log("Loaded todos from localStorage:", parsedTodos);
  } else {
    console.log("No todos found in localStorage.");
  }
}, []);

// Save todos to localStorage whenever the todos state changes
useEffect(() => {
  console.log("Saving todos to localStorage:", todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

const addTodo = () => {
  console.log("Task:", task);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  if (task && startDate && endDate) {
    const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTask('');
    setStartDate('');
    setEndDate('');
    console.log("Added new todo:", newTodo);
    console.log("Updated todos list:", updatedTodos);
  } else {
    console.log("Please fill in all fields.");
  }
};

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className='inputs'>
        <input
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
          />
        </div>
        <div>
          <input 
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
*/


/*
import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      // Parse dates back to Date objects
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
      console.log("Loaded todos from localStorage:", parsedTodos);
    } else {
      console.log("No todos found in localStorage.");
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    console.log("Task:", task);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    if (task && startDate && endDate) {
      const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
      console.log("Added new todo:", newTodo);
      console.log("Updated todos list:", updatedTodos);
    } else {
      console.log("Please fill in all fields.");
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className='inputs'>
        <input
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
          />
        </div>
        <div>
          <input 
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {sortedTodos.map((todo, index) => (
          <li key={index}>
            {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
*/





































/*
import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      // Parse dates back to Date objects
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
      console.log("Loaded todos from localStorage:", parsedTodos);
    } else {
      console.log("No todos found in localStorage.");
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    console.log("Task:", task);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    if (task && startDate && endDate) {
      const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
      console.log("Added new todo:", newTodo);
      console.log("Updated todos list:", updatedTodos);
    } else {
      console.log("Please fill in all fields.");
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className='inputs'>
        <input
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
          />
        </div>
        <div>
          <input 
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {sortedTodos.map((todo, index) => (
          <li key={index} className={index === 0 ? 'top-task' : ''}>
            {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
*/


/*
import React, { useState, useEffect,Link } from 'react';
import './ToDoList.css';
import Calendar from './Calendar';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      // Parse dates back to Date objects
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
      console.log("Loaded todos from localStorage:", parsedTodos);
    } else {
      console.log("No todos found in localStorage.");
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    console.log("Task:", task);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    if (task && startDate && endDate) {
      const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
      console.log("Added new todo:", newTodo);
      console.log("Updated todos list:", updatedTodos);
    } else {
      console.log("Please fill in all fields.");
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className='big-cont'>
    <div className="App">
      <h1>To Do List</h1>
      <div className='inputs'>
        <input
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
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>
      <ul>
        {sortedTodos.map((todo, index) => (
          <li key={index} className={index === 0 ? 'top-task' : ''}>
            {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
    <div className='calendarr'>
      <Calendar todos={todos} />
    </div>
    </div>
  );
}

export default ToDoList;
*/



/*
import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import Calendar from './Calendar';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && startDate && endDate) {
      const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className='big-cont'>
      <div className="App">
        <h1>To Do List</h1>
        <div className='inputs'>
          <input
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
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button className='add-button' onClick={addTodo}>Add</button>
        </div>
        <ul>
          {sortedTodos.map((todo, index) => (
            <li key={index} className={index === 0 ? 'top-task' : ''}>
              {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
      <div className='calendarr'>
        <Calendar todos={todos} />
      </div>
    </div>
  );
}

export default ToDoList;
*/

/*
import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import Calendar from './Calendar';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringDay, setRecurringDay] = useState('Monday');
  const [recurringTime, setRecurringTime] = useState('12:00');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && (startDate || isRecurring)) {
      const newTodo = {
        task,
        startDate: isRecurring ? null : new Date(startDate),
        endDate: isRecurring ? null : new Date(endDate),
        isRecurring,
        recurringDay: isRecurring ? recurringDay : null,
        recurringTime: isRecurring ? recurringTime : null
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
      setIsRecurring(false);
      setRecurringDay('Monday');
      setRecurringTime('12:00');
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className='big-cont'>
      <div className="App">
        <h1>To Do List</h1>
        <div className='inputs'>
          <input
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
                <label>Time:</label>
                <input
                  type="time"
                  value={recurringTime}
                  onChange={(e) => setRecurringTime(e.target.value)}
                />
              </div>
            </div>
          )}
          <button className='add-button' onClick={addTodo}>Add</button>
        </div>
        <ul>
          {sortedTodos.map((todo, index) => (
            <li key={index} className={index === 0 ? 'top-task' : ''}>
              {todo.task} - {todo.isRecurring ? `${todo.recurringDay} ${todo.recurringTime}` : `${todo.startDate.toLocaleDateString()} to ${todo.endDate.toLocaleDateString()}`}
            </li>
          ))}
        </ul>
      </div>
      <div className='calendarr'>
        <Calendar todos={todos} />
      </div>
    </div>
  );
}

export default ToDoList;
*/

import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import Calendar from './Calendar';

function ToDoList() {
  const [todos, setTodos] = useState([]);
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
  }, []);

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
      <div className='calendarr'>
        <Calendar todos={todos} />
      </div>
    </div>
  );
}

export default ToDoList;


/*
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      // Parse dates back to Date objects
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && startDate && endDate) {
      setTodos([...todos, { task, startDate: new Date(startDate), endDate: new Date(endDate) }]);
      setTask('');
      setStartDate('');
      setEndDate('');
    }
  };
*/
/*
import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import Calendar from './Calendar';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      const parsedTodos = storedTodos.map(todo => ({
        ...todo,
        startDate: new Date(todo.startDate),
        endDate: new Date(todo.endDate)
      }));
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && startDate && endDate) {
      const newTodo = { task, startDate: new Date(startDate), endDate: new Date(endDate) };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTask('');
      setStartDate('');
      setEndDate('');
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
    const aIsToday = isToday(a.startDate) || isToday(a.endDate);
    const bIsToday = isToday(b.startDate) || isToday(b.endDate);

    if (aIsToday && !bIsToday) return -1;
    if (!aIsToday && bIsToday) return 1;
    return a.startDate - b.startDate;
  });

  return (
    <div className='big-cont'>
      <div className="App">
        <h1>To Do List</h1>
        <div className='inputs'>
          <input
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
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button className='add-button' onClick={addTodo}>Add</button>
        </div>
        <ul>
          {sortedTodos.map((todo, index) => (
            <li key={index} className={index === 0 ? 'top-task' : ''}>
              {todo.task} - {todo.startDate.toLocaleDateString()} to {todo.endDate.toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
      <div className='calendarr'>
        <Calendar todos={todos} />
      </div>
    </div>
  );
}

export default ToDoList;
*/