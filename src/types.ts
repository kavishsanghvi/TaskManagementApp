export interface Task {
    id: string;
    description: string;
    dueDate: Date;
    category: string;
    subtasks: Subtask[];
    completed: boolean;
}

export interface Subtask {
    id: string;
    description: string;
    completed: boolean;
}

export interface Category {
    id: string;
    name: string;
}

