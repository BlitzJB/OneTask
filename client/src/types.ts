import { SetStateAction } from "react";

export interface Task {
    id: string;
    name: string;
    subTasks: SubTask[];
    completed: boolean;
}

export interface SubTask {
    id: string;
    name: string;
    completed: boolean;
}

export interface TaskState {
    tasks: Task[];
}

export interface GetSubtasksAPIResponse {
    subTasks: string[];
}

export interface TaskInputProps {
    setTasks: React.Dispatch<(prevTasks: Task[]) => Task[]>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}