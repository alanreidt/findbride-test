import { createAction } from "@reduxjs/toolkit";
import { TaskStatus } from "./types/Task";

export const addAction = createAction<string>("add");
export const removeAction = createAction<number>("remove");
export const changeTaskStatusAction = createAction<{
  id: number;
  status: TaskStatus;
}>("changeState");
export const invertAction = createAction("invert");
