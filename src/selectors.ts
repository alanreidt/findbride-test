import { store } from "./store";
import { linkedListToArr } from "./utils";

export const tasksSelector = (state: ReturnType<typeof store.getState>) => {
  const headTask = state.tasks.headTask;

  return headTask === null ? [] : linkedListToArr(headTask);
};
