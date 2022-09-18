import {configureStore, createSlice} from '@reduxjs/toolkit'
import {ILinkedList} from "./types/ILinkedList";
import {Task} from "./types/Task";
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";
import {addAction, changeTaskStateAction, invertAction, removeAction} from "./actions";

type TasksState = {
    headTask?: ILinkedList<Task> | null;
}

export const tasksSlice = createSlice<TasksState, SliceCaseReducers<TasksState>>({
    name: 'tasks',
    initialState: {
        headTask: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(addAction, (state, {payload: task}) => {
            return state;
        })
        .addCase(removeAction, (state, {payload: taskId}) => {
            return state;
        })
        .addCase(changeTaskStateAction, (state, {payload: {taskId, status}}) => {
            return state;
        })
        .addCase(invertAction, state => {
            return state;
        })

});

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
});