import React, { useState } from 'react';
import { Alert, Calendar as AntdCalendar, Modal, Radio } from 'antd';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import './Calendar.css';


dayjs.extend(isBetween);

const Calendar = ({ todos }) => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const [mode, setMode] = useState('month');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasksForSelectedDate, setTasksForSelectedDate] = useState([]);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    const formattedDate = newValue.format('YYYY-MM-DD');
    const tasksForDate = todos.filter(todo =>
      (todo.startDate && dayjs(todo.startDate).format('YYYY-MM-DD') <= formattedDate &&
       dayjs(todo.endDate).format('YYYY-MM-DD') >= formattedDate) ||
      (todo.isRecurring && newValue.format('dddd') === todo.recurringDay)
    );
    setTasksForSelectedDate(tasksForDate);
    setIsModalVisible(true);
  };

  const onPanelChange = (newValue, newMode) => {
    setValue(newValue);
    setMode(newMode);
  };

  const dateCellRender = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const tasksForDate = todos.filter(todo =>
      (todo.startDate && dayjs(todo.startDate).format('YYYY-MM-DD') <= formattedDate &&
        dayjs(todo.endDate).format('YYYY-MM-DD') >= formattedDate) ||
      (todo.isRecurring && date.format('dddd') === todo.recurringDay)
    );

    return tasksForDate.length > 0 ? (
      <div className="highlight">
        {tasksForDate.map((task, index) => (
          <div key={index}>
            {task.task}
          </div>
        ))}
      </div>
    ) : null;
  };

  const monthCellRender = (month) => {
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    const daysInMonth = [];
    for (let day = 1; day <= month.daysInMonth(); day++) {
      daysInMonth.push(dayjs(month).date(day));
    }
    const tasksForMonth = todos.filter(todo =>
      (todo.startDate && dayjs(todo.startDate).isBefore(endOfMonth) && dayjs(todo.endDate).isAfter(startOfMonth)) ||
      (todo.isRecurring && daysInMonth.some(day => day.format('dddd') === todo.recurringDay))
    );

    return tasksForMonth.length > 0 ? (
      <div className="month-highlight">
        {tasksForMonth.map((task, index) => (
          <div key={index}>
            {task.task}
          </div>
        ))}
      </div>
    ) : null;
  };

  const dailyViewRender = (date) => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const hour = dayjs(date).hour(i).minute(0).second(0);
      const tasksForHour = todos.filter(todo =>
        (todo.startDate && dayjs(todo.startDate).isBefore(hour) && dayjs(todo.endDate).isAfter(hour)) ||
        (todo.isRecurring && date.format('dddd') === todo.recurringDay &&
          hour.isBetween(dayjs(date).hour(parseInt(todo.recurringStartTime.split(':')[0])),
            dayjs(date).hour(parseInt(todo.recurringEndTime.split(':')[0])), null, '[]'))
      );
      hours.push(
        <div key={i} className="hour-cell">
          {hour.format('HH:00')} - {tasksForHour.map(task => task.task).join(', ') || 'No tasks'}
        </div>
      );
    }
    return hours;
  };

  return (
    <div className='calendar'>
      <Alert className="alert-message" message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Radio.Group
        onChange={(e) => setMode(e.target.value)}
        value={mode}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="day">Daily</Radio.Button>
        <Radio.Button value="month">Monthly</Radio.Button>
        <Radio.Button value="year">Yearly</Radio.Button>
      </Radio.Group>
      {mode === 'day' ? (
        <div className="daily-view">
          {dailyViewRender(value)}
        </div>
      ) : (
        <AntdCalendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          mode={mode}
        />
      )}
      <Modal
        title={`Tasks for ${selectedValue?.format('YYYY-MM-DD')}`}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <ul>
          {tasksForSelectedDate.map((task, index) => (
            <li key={index}>
              {task.task} - {task.isRecurring ? `${task.recurringDay} ${task.recurringStartTime}-${task.recurringEndTime}` : `${dayjs(task.startDate).format('YYYY-MM-DD')} to ${dayjs(task.endDate).format('YYYY-MM-DD')}`}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Calendar;

