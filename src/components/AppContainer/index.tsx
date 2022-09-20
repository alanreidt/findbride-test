import React from "react";
import styles from "./AppContainer.css";
import {TaskInput} from "../TaskInput";
import {useSelector} from "react-redux";
import {tasksSelector} from "../../selectors";

export function AppContainer() {
    const tasks = useSelector(tasksSelector);

    return <div className={styles.App}>
        <div className={styles.Header}>ToDo App</div>

        <div className={styles.TaskInputWrapper}>
            <TaskInput/>
        </div>
    </div>
}