export type ILinkedList<T> = {
    readonly value: T;
    next(): ILinkedList<T> | null;
}