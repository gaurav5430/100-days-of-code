class PriorityQueueWithLinkedList {
    constructor() {
        this.values = new LinkedList();
    }

    get length() {
        return this.values.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(item) {
        let index = 0;
        let i = 0;
        let found = false;
    
        //find index for new item to be inserted
        for (let existingItem of this.values) {
            if(existingItem.priority < item.priority) {
                index = i;
                found = true;
                break;
            }

            i++;
        }

        if(!found) index = i;
        this.values.addAt(item, index);
    }

    dequeue() {
        return this.values.removeAt(0);
    }

    peek() {
        return this.values[0].value;
    }
}