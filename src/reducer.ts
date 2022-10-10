import {LinkedListNode} from "./types/LinkedListNode";
import {Task, TaskStatus} from "./types/Task";
import {AnyAction} from "redux";
import {addAction, invertAction, removeAction} from "./actions";

type TasksState = {
    headTask: LinkedListNode<Task> | null;
}

const initialState: TasksState = {
    headTask: null
}

export function tasksReducer(state: TasksState = initialState, action: AnyAction): TasksState {
    if (addAction.match(action)) {
        if (state.headTask === null) {
            return {
                ...state,
                headTask: {
                    value: {
                        id: Date.now(),
                        name: action.payload,
                        status: TaskStatus.IN_PROGRESS,
                    },
                    next: null
                },
            }
        }

        let lastHeadTask = state.headTask;

        while (lastHeadTask.next !== null) {
            lastHeadTask = lastHeadTask.next;
        }

        lastHeadTask.next = {
            value: {
                id: Date.now(),
                name: action.payload,
                status: TaskStatus.IN_PROGRESS,
            },
            next: null
        };

        return {
            ...state,
            headTask: state.headTask,
        };
    } else if (removeAction.match(action)) {
        return state;
    } else if (invertAction.match(action)) {
        return state;
    } else {
        return state;
    }
}
