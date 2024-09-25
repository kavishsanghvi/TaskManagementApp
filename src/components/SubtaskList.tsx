import React from 'react';
import { Subtask } from '../types';

interface SubtaskListProps {
    subtasks: Subtask[];
    toggleSubtaskComplete: (id: string) => void;
}

const SubtaskList: React.FC<SubtaskListProps> = ({ subtasks, toggleSubtaskComplete }) => {
    return (
        <div>
            {subtasks.map((subtask) => (
                <div key={subtask.id}>
                    <input
                        type="checkbox"
                        checked={subtask.completed}
                        onChange={() => toggleSubtaskComplete(subtask.id)}
                    />
                    {subtask.description}
                </div>
            ))}
        </div>
    );
};

export default SubtaskList;
