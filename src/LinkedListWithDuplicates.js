class LinkedListWithDuplicates extends LinkedList {
    constructor() {
        super();
    }

    add(key, value) {
        const node = new this.Node(key, value, null);
        if (this.head === undefined) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }

            temp.next = node;
        }
    }
}