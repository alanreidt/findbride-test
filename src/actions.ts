import {createAction} from "@reduxjs/toolkit";
import {Task, TaskStatus} from "./types/Task";

export const addAction = createAction<string>('add');
export const removeAction = createAction<number>('remove');
export const changeTaskStateAction = createAction<{ taskId: number, status: TaskStatus }>('changeState');
export const invertAction = createAction('invert');