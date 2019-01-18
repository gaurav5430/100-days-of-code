class PriorityQueueUsingLinkedList extends QueueUsingLinkedList {
    constructor() {
        super();
    }

    enqueue(key, value) {
        let index = 0;
        let i = 0;
        let found = false;
    
        //find index for new item to be inserted
        for (let existingItem of this.collection) {
            if(existingItem.value.priority < value.priority) {
                index = i;
                found = true;
                break;
            }

            i++;
        }

        if(!found) index = i;
        this.collection.addAt(index, key, value);
    }
}