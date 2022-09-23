import React from "react";
import styles from "./AppContainer.css";
import {TaskInput} from "../TaskInput";
import {useDispatch, useSelector} from "react-redux";
import {tasksSelector} from "../../selectors";
import {addAction, invertAction} from "../../actions";

export function AppContainer() {
    const tasks = useSelector(tasksSelector);
    const dispatch = useDispatch();

    return <div className={styles.App}>
        <div className={styles.Header}>ToDo App</div>

        <div className={styles.TaskInputWrapper}>
            <TaskInput
                onAdd={name => dispatch(addAction(name))}
                onInvert={() => dispatch(invertAction())}
            />
        </div>
    </div>
}