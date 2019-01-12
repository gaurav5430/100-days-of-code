class SelfOrganizingListMTF extends LinkedList {
    constructor() {
        super();
    }

    get(key) {
        if(key === this.head.key) {
            return this.head.value;
        }

        let current = this.head;
        let prev = this.head;
        do {
            if (key === current.key) {
                //remove this node
                prev.next = current.next;

                //move to first
                let temp = this.head;
                this.head = current;
                current.next = temp;
                return current.value;
            }
            prev = current;
            current = current.next;
        } while(current);
    }
}