import { Task } from '../types';

// Save tasks to localStorage
export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Load tasks from localStorage
export const loadTasks = (): Task[] => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
};
