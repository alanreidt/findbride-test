import React from "react";
import { Task, TaskStatus } from "../../types/Task";
import DeleteIcon from "../../delete-icon.svg";
import styles from "./TaskList.css";

export function TaskList({
  tasks,
  onTaskStatusChange,
  onTaskDelete,
}: {
  tasks: Task[];
  onTaskStatusChange: ({
    id,
    status,
  }: {
    id: number;
    status: TaskStatus;
  }) => void;
  onTaskDelete: (id: number) => void;
}) {
  return (
    <ul className={styles.TaskList}>
      {tasks?.map((task) => (
        <li key={task.id} className={styles.Task}>
          <div className={styles.ChangeTaskStatusCheckbox}>
            <label htmlFor={String(task.id)} className={styles.OriginalLabel}>
              {task.name}
            </label>
            <input
              type="checkbox"
              id={String(task.id)}
              className={styles.OriginalCheckbox}
              name={String(task.id)}
              checked={!!task.status}
              onChange={(event) =>
                onTaskStatusChange({
                  id: task.id,
                  status: event.target.checked
                    ? TaskStatus.DONE
                    : TaskStatus.IN_PROGRESS,
                })
              }
            />
            <div className={styles.FakeCheckbox}>
              <span className={styles.FakeCheckbox__StatusDisplay} />
              {task.name}
            </div>
          </div>

          <button
            className={styles.DeleteTaskButton}
            onClick={() => {
              onTaskDelete(task.id);
            }}
          >
            <DeleteIcon className={styles.DeleteTaskIcon} width="25" />
          </button>
        </li>
      ))}
    </ul>
  );
}
