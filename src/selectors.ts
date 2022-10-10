import { store } from "./store";

export const tasksSelector = (state: ReturnType<typeof store.getState>) => {
  let headTask = state.tasks.headTask;
  const result = headTask && [headTask.value];

  while (headTask?.next != null) {
    result?.push(headTask.next.value);
    headTask = headTask.next;
  }

  return result;
};
