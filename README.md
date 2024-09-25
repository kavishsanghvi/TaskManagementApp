# Task Management App

## Overview

The **Task Management App** is a simple yet powerful task management tool built using React and TypeScript. It allows users to manage their daily tasks by adding, editing, deleting, organizing tasks into categories, and managing subtasks. This app also ensures that all tasks persist through page reloads by using local storage. The app features robust validation, task filtering, and due date notifications for enhanced usability.

## Features

- **Task List**: Displays a list of tasks with their statuses (complete/incomplete).
- **Add Task**: Add new tasks with a description, due date, and category.
- **Edit Task**: Modify task details such as description, due date, and category.
- **Delete Task**: Remove tasks from the list.
- **Complete Task**: Mark tasks as complete or incomplete.
- **Subtasks**: Each task can have subtasks, which must be completed before marking the parent task as complete.
- **Categories**: Predefined and user-defined task categories.
- **Local Storage Persistence**: Tasks, subtasks, and categories persist across page reloads.
- **Due Date Notifications**: Highlights overdue tasks and optionally sends a notification when tasks are due soon.
- **Form Validation**:
  - Task description should not be empty (maximum 100 characters).
  - Due date must be in the future.
  - Tasks must have a category and subtasks must have valid descriptions.

## Technologies Used

- **React** (with TypeScript)
- **Local Storage** for data persistence
- **CSS** for styling
- **Jest** for unit testing (optional)

## Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (Download from [here](https://nodejs.org/))
- **npm** (included with Node.js)

### Step-by-Step Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```

2. **Install Dependencies**:
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**:
   To start the development server and view the application in the browser:
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000` in your browser.

### Running Tests (Optional)

The project includes unit tests for key features (task management, subtasks, and filtering). To run the tests, use the following command:

```bash
npm test
```

## Folder Structure

Here's a high-level overview of the project's structure:

```
├── src
│   ├── components
│   │   ├── TaskList.tsx          # Component for rendering the list of tasks
│   │   ├── TaskForm.tsx          # Component for adding/editing tasks
│   │   ├── TaskItem.tsx          # Component for individual task items
│   │   ├── SubtaskList.tsx       # Component for rendering subtasks
│   ├── utils
│   │   └── localStorageUtil.ts   # Helper for managing local storage
│   ├── types.ts                  # TypeScript types for tasks and subtasks
│   ├── App.tsx                   # Main entry component
│   ├── App.css                   # Styling for the app
│   └── index.tsx                 # Main entry point for React app
├── public
│   └── index.html                # Main HTML file
├── package.json                  # npm package file
└── README.md                     # This readme file
```

## Assumptions

- Tasks must have a description and a category.
- Subtasks must have a valid description.
- A task cannot be marked as complete until all its subtasks are completed.
- Due dates must be in the future.

## Contact
<a href="mailto:sanghvi_kavish@yahoo.in">Email</a> | <a href="https://www.linkedin.com/in/kavishsanghvi">LinkedIn</a> | <a href="https://www.medium.com/@kavishsanghvi">Medium</a> | <a href="https://kavishsanghviblog.wordpress.com">Blog</a> | <a href="https://twitter.com/kavishsanghvi25">Twitter</a> | <a href="https://www.facebook.com/kavish.sanghvi.5">Facebook</a> | <a href="https://www.instagram.com/kavishsanghvi96">Instagram</a>
