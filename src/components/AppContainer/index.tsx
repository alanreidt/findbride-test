import React from "react";
import styles from "./AppContainer.css";
import {TaskInput} from "../TaskInput";

export function AppContainer() {
    return <div className={styles.App}>
        <div className={styles.Header}>ToDo App</div>

        <div className={styles.TaskInputWrapper}>
            <TaskInput/>
        </div>
    </div>
}