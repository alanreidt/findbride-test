import { AnyAction } from "redux";
import { LinkedListNode } from "./types/LinkedListNode";
import { Task, TaskStatus } from "./types/Task";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  deleteAction,
} from "./actions";
import { addTask, arrToLinkedList, deleteTask, linkedListToArr } from "./utils";

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
    return {
      ...state,
      headTask: deleteTask(state.headTask, action.payload),
    };
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
