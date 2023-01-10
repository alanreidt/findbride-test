import { createEvent } from "effector";
import { TaskStatus } from "./types/Task";

export const taskAdded = createEvent<string>("Task added");
export const taskRemoved = createEvent<number>("Task removed");
export const taskStatusChanged = createEvent<{
  id: number;
  status: TaskStatus;
}>("Task status changed");
export const tasksInverted = createEvent("Tasks inverted");
