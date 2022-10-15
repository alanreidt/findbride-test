import { AnyAction } from "redux";
import { LinkedListNode } from "./types/LinkedListNode";
import { Task, TaskStatus } from "./types/Task";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  deleteAction,
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

    let currentHead = state.headTask;
    let newHeadTask = { ...state.headTask };
    let currentNewHead = newHeadTask;

    while (currentHead.next !== null) {
      currentHead = currentHead.next;
      currentNewHead.next = { ...currentHead };
      currentNewHead = currentNewHead.next;
    }

    currentNewHead.next = {
      value: {
        id: Date.now(),
        name: action.payload,
        status: TaskStatus.IN_PROGRESS,
      },
      next: null,
    };

    return { ...state, headTask: newHeadTask };
  } else if (changeTaskStatusAction.match(action)) {
    if (state.headTask === null) {
      return state;
    }

    let currentHead = state.headTask;
    let newHeadTask = { ...state.headTask };
    let currentNewHead = newHeadTask;
    const { id, status } = action.payload;

    while (currentHead.next !== null) {
      currentHead = currentHead.next;
      currentNewHead.next =
        currentHead.value.id === id
          ? { ...currentHead, value: { ...currentHead.value, status } }
          : { ...currentHead };
      currentNewHead = currentNewHead.next;
    }

    return { ...state, headTask: newHeadTask };
  } else if (deleteAction.match(action)) {
    if (state.headTask === null) {
      return state;
    }

    const tasks = linkedListToArr(state.headTask);
    const newTasks = tasks.filter((task) => task.id !== action.payload);

    return { ...state, headTask: arrToLinkedList(newTasks) };
  } else if (invertAction.match(action)) {
    if (state.headTask === null) {
      return state;
    }

    const tasks = linkedListToArr(state.headTask);
    const newTasks = tasks.reverse();

    return { ...state, headTask: arrToLinkedList(newTasks) };
  } else {
    return state;
  }
}
