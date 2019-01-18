class PriorityQueueUsingArray extends QueueUsingArray {
    constructor() {
        super();
    }

    enqueue(key, value) {
        if(this.length === 0) {
            this.collection.push({ key, value });
        }
        else {
            const index = this.collection.findIndex((item) => value.priority >= item.value.priority)
            
            if(index !== undefined && index >= 0) {
                this.collection.splice(index, 0, { key, value });
            }
            else {
                this.collection.push({ key, value });
            }
        }
    }
}