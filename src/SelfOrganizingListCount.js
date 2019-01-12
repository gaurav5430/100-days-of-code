class SelfOrganizingListCount extends LinkedList {
    constructor() {
        super();
        this.counts = {};
    }

    get(key) {
        if(key === this.head.key) {
            this.counts[key] = this.counts[key] ? this.counts[key] + 1 : 1;
            return this.head.value;
        }

        let current = this.head;
        let prev = null;

        do {
            if (key === current.key) {

                //increment the count
                this.counts[key] = this.counts[key] ? this.counts[key] + 1 : 1;

                //find out the new location
                let temp = this.head;
                let temp_prev = null;

                while(this.counts[temp.key] >= this.counts[key]) {
                    temp_prev = temp;
                    temp = temp.next;
                }

                //if we have reached the same node, do nothing , else
                if(current !== temp_prev) {
                    //remove the current node from its place
                    prev.next = current.next;
                    current.next = temp;

                    if(temp === this.head) this.head = current;
                    else temp_prev.next = current;
                }

                return current.value;
            }

            prev = current;
            current = current.next;
        } while(current);
    }
}