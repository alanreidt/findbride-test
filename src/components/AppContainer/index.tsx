import React from "react";
import styles from "./AppContainer.css";
import { TaskInput } from "../TaskInput";
import { useDispatch, useSelector } from "react-redux";
import { tasksSelector } from "../../selectors";
import {
  addAction,
  changeTaskStatusAction,
  invertAction,
  deleteAction,
} from "../../actions";
import { TaskList } from "../TaskList";

export function AppContainer() {
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  return (
    <div className={styles.App}>
      <div className={styles.Header}>ToDo App</div>

      <div className={styles.TaskInputWrapper}>
        <TaskInput
          onAdd={(name) => dispatch(addAction(name))}
          onInvert={() => dispatch(invertAction())}
        />
        {tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            onTaskStatusChange={(value) => {
              dispatch(changeTaskStatusAction(value));
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
