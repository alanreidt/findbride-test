import {ILinkedListNode} from "./types/ILinkedListNode";
import {Task} from "./types/Task";
import {AnyAction} from "redux";
import {addAction, invertAction, removeAction} from "./actions";

type TasksState = {
    headTask: ILinkedListNode<Task> | null;
}

const initialState: TasksState = {
    headTask: null
}

export function tasksReducer(state: TasksState = initialState, action: AnyAction): TasksState {
    if (addAction.match(action)) {
        return state;
    } else if (removeAction.match(action)) {
        return state;
    } else if (invertAction.match(action)) {
        return state;
    } else {
        return state;
    }
}