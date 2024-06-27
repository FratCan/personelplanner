import React, { useState } from 'react';
import './FilterReport.css'
import { Button, notification } from 'antd';

function FilterReport({ todos }) {
  const [filter, setFilter] = useState('day');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const getFilteredTodos = () => {
    const today = new Date();
    let filteredTodos = [];

    switch (filter) {
      case 'day':
        filteredTodos = todos.filter(todo => todo.startDate && isToday(todo.startDate));
        break;
      case 'week':
        filteredTodos = todos.filter(todo => todo.startDate && isThisWeek(todo.startDate));
        break;
      case 'month':
        filteredTodos = todos.filter(todo => todo.startDate && isThisMonth(todo.startDate));
        break;
      case 'year':
        filteredTodos = todos.filter(todo => todo.startDate && isThisYear(todo.startDate));
        break;
      case 'custom':
        filteredTodos = todos.filter(todo => 
          todo.startDate && 
          new Date(customStartDate) <= todo.startDate &&
          todo.startDate <= new Date(customEndDate)
        );
        break;
      default:
        filteredTodos = todos;
    }

    return filteredTodos;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  };

  const isThisWeek = (date) => {
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  };

  const isThisMonth = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth();
  };

  const isThisYear = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear();
  };

  const filteredTodos = getFilteredTodos();


  const mailyolla=()=>{
    notification.success({
        message: 'Email Yollandı',
        description: 'Email başarıyla yollandı.',
        placement: 'topRight',
      });
  }
  return (
    <div>
      <h2 className='baslik'>Filter and Report</h2>
      <div className='ayar'>
        <label>
          <input
            type="radio"
            value="day"
            checked={filter === 'day'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Day
        </label>
        <label>
          <input
            type="radio"
            value="week"
            checked={filter === 'week'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Week
        </label>
        <label>
          <input
            type="radio"
            value="month"
            checked={filter === 'month'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Month
        </label>
        <label>
          <input
            type="radio"
            value="year"
            checked={filter === 'year'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Year
        </label>
        <label>
          <input
            type="radio"
            value="custom"
            checked={filter === 'custom'}
            onChange={(e) => setFilter(e.target.value)}
          />
          Custom
        </label>
      </div>
      <div>
      <Button className="send-email-button"type="primary" onClick={mailyolla}>
        Send Email
      </Button>
      </div>
      {filter === 'custom' && (
        <div>
          <input
            type="date"
            value={customStartDate}
            onChange={(e) => setCustomStartDate(e.target.value)}
          />
          <input
            type="date"
            value={customEndDate}
            onChange={(e) => setCustomEndDate(e.target.value)}
          />
        </div>
      )}
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            {todo.task} - {todo.startDate ? todo.startDate.toLocaleDateString() : 'No Date'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterReport;
