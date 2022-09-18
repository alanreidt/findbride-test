export enum TaskStatus {
    IN_PROGRESS,
    DONE
}

export type Task = {
    id: number;
    name: string;
    status: TaskStatus;
}