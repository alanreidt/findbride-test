import {store} from "./store";

export const tasksSelector = (state: ReturnType<typeof store.getState>) => state.tasks;