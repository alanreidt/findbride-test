import { TaskStatus } from "./types/Task";
import {
  taskAdded,
  taskStatusChanged,
  taskRemoved,
  tasksInverted,
} from "./actions";
import { addTask, changeTaskStatus, deleteTask, invertTasks } from "./utils";
import { $taskList } from "./store";

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
