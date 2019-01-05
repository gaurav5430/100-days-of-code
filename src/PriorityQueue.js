class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    enqueue(item) {
        if(this.length === 0) {
            this.values.push(item);
        }
        else {
            // const index = this.values
            // .map((existingItem, index) => {
            //     if(existingItem.priority < item.priority){
            //         return index;
            //     }
            // })
            // .filter(ind => ind >= 0)[0];

            // const index = this.values.reduce((acc, current, index) => {
            //     if(acc !== undefined) {
            //         return acc;
            //     }

            //     if(current.priority < item.priority) {
            //         return index;
            //     }
            // }, undefined);
            const index = this.values.findIndex((existingItem) => existingItem.priority < item.priority)
            
            if(index !== undefined && index >= 0) {
                this.values.splice(index, 0, item);
            }
            else {
                this.values.push(item);
            }
        }
    }
}