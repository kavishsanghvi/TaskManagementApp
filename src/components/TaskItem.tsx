import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
    task: Task;
    toggleComplete: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask, editTask }) => {
    return (
        <div>
            <h3>{task.description}</h3>
            <p>Due: {task.dueDate.toLocaleDateString()}</p>
            <p>Category: {task.category}</p>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
