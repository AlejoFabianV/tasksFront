export interface Task {
    _id: string;
    title: string;
    description?: string;
    completed?: boolean;
    createdAt: Date;
    updatedAt?: Date;
}

export type CreateTask = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;
export type UpdateTask = Partial<CreateTask>;