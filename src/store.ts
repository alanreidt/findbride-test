import { createStore } from "effector";
import { LinkedListNode } from "./types/LinkedListNode";
import { Task } from "./types/Task";
import { linkedListToArr } from "./utils";

type TasksState = {
  headTask: LinkedListNode<Task> | null;
};

const initialState: TasksState = {
  headTask: null,
};

export const $taskList = createStore(initialState);

export const $tasks = $taskList.map((taskList) => {
  const headTask = taskList.headTask;

  return headTask === null ? [] : linkedListToArr(headTask);
});
