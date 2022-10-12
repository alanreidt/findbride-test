import React, { ChangeEvent, useState } from "react";
import styles from "./TaskInput.css";

type Props = {
  onAdd: (name: string) => void;
  onInvert: () => void;
};

export function TaskInput({ onAdd, onInvert }: Props) {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.TaskInput}>
        <input
          type="text"
          className={styles.Input}
          value={name}
          placeholder="Enter task name"
          onChange={handleChange}
        />
        <button className={styles.Button} type="submit">
          Add
        </button>
        <button className={styles.Button} onClick={onInvert}>
          Invert
        </button>
      </div>
    </form>
  );
}
