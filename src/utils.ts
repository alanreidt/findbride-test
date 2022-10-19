import { LinkedListNode } from "./types/LinkedListNode";
import { Task } from "./types/Task";

const linkedListToArr = <T>(linkedList: LinkedListNode<T>) => {
  const arr = [linkedList.value];

  while (linkedList?.next != null) {
    arr?.push(linkedList.next.value);
    linkedList = linkedList.next;
  }

  return arr;
};

const arrToLinkedList = <T>(arr: Array<T>) => {
  let linkedList: LinkedListNode<T> | null = null;
  let currentHead: LinkedListNode<T> | null | undefined;

  arr.forEach((item) => {
    if (linkedList === null) {
      linkedList = {
        value: item,
        next: null,
      };

      return;
    }

    if (currentHead === undefined) {
      linkedList.next = {
        value: item,
        next: null,
      };
      currentHead = linkedList.next;

      return;
    }

    currentHead!.next = {
      value: item,
      next: null,
    };
    currentHead = currentHead!.next;
  });

  return linkedList;
};

const addTask = function self(
  currentHead: LinkedListNode<Task> | null,
  newTask: LinkedListNode<Task>
): LinkedListNode<Task> | null {
  if (currentHead === null) {
    return newTask;
  }

  return {
    ...currentHead,
    next: self(currentHead.next, newTask),
  };
};

const deleteTask = function self(
  currentHead: LinkedListNode<Task> | null,
  id: number
): LinkedListNode<Task> | null {
  if (currentHead === null) {
    return null;
  }

  if (currentHead.value.id === id) {
    return self(currentHead.next, id);
  }

  return {
    ...currentHead,
    next: self(currentHead.next, id),
  };
};

export { linkedListToArr, arrToLinkedList, addTask, deleteTask };
