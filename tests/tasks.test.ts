import {tasksSlice} from "../src/store";
import {addAction} from "../src/actions";
import {Task, TaskStatus} from "../src/types/Task";
import {ILinkedList} from "../src/types/ILinkedList";

function getTaskIdsChain(head?: ILinkedList<Task> | null): number[] {
    if (head) {
        return [head.value.id].concat(getTaskIdsChain(head.next()));
    }

    return []
}

describe("Tasks test", () =>{
    describe("Add", () => {
        it("If doesn't have any tasks", () => {
            const state = tasksSlice.reducer({headTask: null}, addAction({
                id: 1,
                name: "Test",
                status: TaskStatus.IN_PROGRESS
            }));

            const idsChain = getTaskIdsChain(state.headTask);

            expect(idsChain).toEqual([1])
        });
    });
});