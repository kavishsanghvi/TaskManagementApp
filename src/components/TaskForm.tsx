import React, { useState } from 'react';
import { Task } from '../types';

interface TaskFormProps {
    onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        if (description === "" || description.length > 100) {
            alert("Description must not be empty and less than 100 characters.");
            return;
        }
        if (new Date(dueDate) < new Date()) {
            alert("Due date cannot be in the past.");
            return;
        }
        if (category === "") {
            alert("Please select a category.");
            return;
        }

        const newTask: Task = {
            id: crypto.randomUUID(),  // Generate a unique ID
            description,
            dueDate: new Date(dueDate),
            category,
            subtasks: [],
            completed: false,
        };

        onSubmit(newTask);
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <input
                type="text"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
