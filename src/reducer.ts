import { AnyAction } from "redux";
import { LinkedListNode } from "./types/LinkedListNode";
import { Task, TaskStatus } from "./types/Task";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  deleteAction,
} from "./actions";
import { addTask, changeTaskStatus, deleteTask, invertTasks } from "./utils";

type TasksState = {
  headTask: LinkedListNode<Task> | null;
};

const initialState: TasksState = {
  headTask: null,
};

export function tasksReducer(
  state: TasksState = initialState,
  action: AnyAction
): TasksState {
  if (addAction.match(action)) {
    return {
      ...state,
      headTask: addTask(state.headTask, {
        value: {
          id: Date.now(),
          name: action.payload,
          status: TaskStatus.IN_PROGRESS,
        },
        next: null,
      }),
    };
  } else if (changeTaskStatusAction.match(action)) {
    return {
      ...state,
      headTask: changeTaskStatus(state.headTask, action.payload),
    };
  } else if (deleteAction.match(action)) {
    return {
      ...state,
      headTask: deleteTask(state.headTask, action.payload),
    };
  } else if (invertAction.match(action)) {
    return { ...state, headTask: invertTasks(state.headTask, null) };
  } else {
    return state;
  }
}
