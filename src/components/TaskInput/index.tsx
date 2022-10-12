import React, { ChangeEvent, useCallback, useState } from "react";
import styles from "./Task.css";

type Props = {
  onAdd: (name: string) => void;
  onInvert: () => void;
};

export function TaskInput({ onAdd, onInvert }: Props) {
  const [name, setName] = useState("");

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      onAdd(name);
      setName("");
    },
    [name]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.TaskInput}>
        <input
          onChange={handleOnChange}
          value={name}
          className={styles.Input}
          type="text"
          placeholder="Enter task name"
        />
        <button className={styles.Button} type="submit">
          Add
        </button>
        <button onClick={onInvert} className={styles.Button} type="button">
          Invert
        </button>
      </div>
    </form>
  );
}
