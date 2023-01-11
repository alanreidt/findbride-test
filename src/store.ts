import { createStore } from "effector";
import {
  taskAdded,
  taskRemoved,
  tasksInverted,
  taskStatusChanged,
} from "./actions";
import { LinkedListNode } from "./types/LinkedListNode";
import { Task, TaskStatus } from "./types/Task";
import {
  addTask,
  changeTaskStatus,
  deleteTask,
  invertTasks,
  linkedListToArr,
} from "./utils";

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

$taskList
  .on(taskAdded, (taskList, name) => ({
    ...taskList,
    headTask: addTask(taskList.headTask, {
      value: {
        id: Date.now(),
        name,
        status: TaskStatus.IN_PROGRESS,
      },
      next: null,
    }),
  }))
  .on(taskStatusChanged, (taskList, taskState) => ({
    ...taskList,
    headTask: changeTaskStatus(taskList.headTask, taskState),
  }))
  .on(taskRemoved, (taskList, id) => ({
    ...taskList,
    headTask: deleteTask(taskList.headTask, id),
  }))
  .on(tasksInverted, (taskList) => ({
    ...taskList,
    headTask: invertTasks(taskList.headTask, null),
  }));
