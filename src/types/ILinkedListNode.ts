export type ILinkedListNode<T> = {
    readonly value: T;
    next: ILinkedListNode<T> | null;
}