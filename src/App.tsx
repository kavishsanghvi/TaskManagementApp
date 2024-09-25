import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Task, Subtask } from './types';
import { saveTasks, loadTasks } from './utils/localStorageUtil';
import './App.css';

const App: React.FC = () => {
  // State to store tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const loadedTasks = loadTasks();
    setTasks(loadedTasks);
  }, []);

  // Persist tasks to localStorage whenever tasks state changes
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add a new task
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  // Edit a task
  const editTask = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      const newDescription = prompt("Enter new description:", taskToEdit.description);
      if (newDescription && newDescription.length <= 100) {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, description: newDescription } : task
        );
        setTasks(updatedTasks);
      }
    }
  };

  // Toggle task complete status
  const toggleComplete = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle subtask complete status (Helper function)
  const toggleSubtaskComplete = (taskId: string, subtaskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const updatedSubtasks = task.subtasks.map((subtask: Subtask) =>
          subtask.id === subtaskId
            ? { ...subtask, completed: !subtask.completed }
            : subtask
        );
        return { ...task, subtasks: updatedSubtasks };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      {/* Task Form to add new tasks */}
      <TaskForm onSubmit={addTask} />

      {/* Task List */}
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
