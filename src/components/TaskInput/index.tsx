import React from "react";
import styles from "./Task.css";

export function TaskInput() {
    return <div className={styles.TaskInput}>
        <input className={styles.Input} type="text" placeholder="Enter task description"/>
        <input className={styles.Button} type="button" value="Add"/>
        <input className={styles.Button} type="button" value="Invert"/>
    </div>
}