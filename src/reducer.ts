import { LinkedListNode } from "./types/LinkedListNode";
import { Task, TaskStatus } from "./types/Task";
import { AnyAction } from "redux";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  removeAction,
} from "./actions";
import { arrToLinkedList, linkedListToArr } from "./utils";

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
    if (state.headTask === null) {
      return {
        ...state,
        headTask: {
          value: {
            id: Date.now(),
            name: action.payload,
            status: TaskStatus.IN_PROGRESS,
          },
          next: null,
        },
      };
    }

    const tasks = linkedListToArr(state.headTask);
    tasks.push({
      id: Date.now(),
      name: action.payload,
      status: TaskStatus.IN_PROGRESS,
    });

    return {
      ...state,
      headTask: arrToLinkedList(tasks),
    };
  } else if (changeTaskStatusAction.match(action)) {
    if (state.headTask === null) {
      return state;
    }

    const tasks = linkedListToArr(state.headTask);
    const { id, status } = action.payload;

    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );

    return { ...state, headTask: arrToLinkedList(newTasks) };
  } else if (removeAction.match(action)) {
    return state;
  } else if (invertAction.match(action)) {
    return state;
  } else {
    return state;
  }
}
