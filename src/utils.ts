import { LinkedListNode } from "./types/LinkedListNode";

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

export { linkedListToArr, arrToLinkedList };
