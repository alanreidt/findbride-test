import React from "react";
import { useDispatch } from "react-redux";
import { useStore } from "effector-react";
import { TaskInput } from "../TaskInput";
import { TaskList } from "../TaskList";
import { $tasks } from "../../store";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  deleteAction,
} from "../../actions";
import styles from "./AppContainer.css";

export function AppContainer() {
  const tasks = useStore($tasks);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <div className={styles.Header}>ToDo App</div>

      <div className={styles.TaskInputWrapper}>
        <TaskInput
          onAdd={(name) => {
            dispatch(addAction(name));
          }}
          onInvert={() => {
            dispatch(invertAction());
          }}
        />
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            onTaskStatusChange={(statusChangeState) => {
              dispatch(changeTaskStatusAction(statusChangeState));
            }}
            onTaskDelete={(id) => {
              dispatch(deleteAction(id));
            }}
          />
        )}
      </div>
    </div>
  );
}
