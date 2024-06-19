import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({
        task,
        startDate,
        endDate,
        id: Date.now(),
        });
        setTask('');
        setStartDate('');
        setEndDate('');
    };

    return (
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="mission"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Başlangıç Tarihi"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Bitiş Tarihi"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            <button className="buttonspecial" type="submit">Add</button>
            </form>
    );
}

export default TodoForm;
