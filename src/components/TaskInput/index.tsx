import React, { ChangeEvent, useState } from "react";
import styles from "./TaskInput.css";

export function TaskInput({
  onAdd,
  onInvert,
}: {
  onAdd: (name: string) => void;
  onInvert: () => void;
}) {
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
        <button type="submit" className={styles.Button}>
          Add
        </button>
        <button type="button" className={styles.Button} onClick={onInvert}>
          Invert
        </button>
      </div>
    </form>
  );
}
