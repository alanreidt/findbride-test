import React from "react";
import { useStore } from "effector-react";
import { TaskInput } from "../TaskInput";
import { TaskList } from "../TaskList";
import { $tasks } from "../../store";
import {
  taskAdded,
  tasksInverted,
  taskStatusChanged,
  taskRemoved,
} from "../../actions";
import styles from "./AppContainer.css";

export function AppContainer() {
  const tasks = useStore($tasks);

  return (
    <div className={styles.App}>
      <div className={styles.Header}>ToDo App</div>

      <div className={styles.TaskInputWrapper}>
        <TaskInput
          onAdd={(name) => {
            taskAdded(name);
          }}
          onInvert={tasksInverted}
        />
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            onTaskStatusChange={(statusChangeState) => {
              taskStatusChanged(statusChangeState);
            }}
            onTaskDelete={(id) => {
              taskRemoved(id);
            }}
          />
        )}
      </div>
    </div>
  );
}
