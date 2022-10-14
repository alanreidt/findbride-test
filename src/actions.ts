import { createAction } from "@reduxjs/toolkit";
import { TaskStatus } from "./types/Task";

export const addAction = createAction<string>("add");
export const deleteAction = createAction<number>("delete");
export const changeTaskStatusAction = createAction<{
  id: number;
  status: TaskStatus;
}>("changeState");
export const invertAction = createAction("invert");
