import {configureStore} from '@reduxjs/toolkit';
import {tasksReducer} from "./reducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});