import { v4 as uuidv4 } from 'uuid';
import { Task } from './types';

export const defaultTasks: Task[] = [
    {
        id: uuidv4(),
        title: "Finished Task",
        description: "Write your description",
        completed: true,
        tags: ['Finished']
    },
    {
        id: uuidv4(),
        title: "Task 2",
        description: "Write your description",
        completed: true,
        tags: ['Task 2']
    },
    {
        id: uuidv4(),
        title: "Task 3",
        description: "Write your description",
        completed: true,
        tags: ['Task 3']
    },
];