export type LinkedListNode<T> = {
    readonly value: T;
    next: LinkedListNode<T> | null;
}