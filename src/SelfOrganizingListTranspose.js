class SelfOrganizingListTranspose extends LinkedList {
    constructor() {
        super();
    }

    get(key) {
        if(key === this.head.key) {
            return this.head.value;
        }

        let current = this.head;
        let prev = null;
        let prevprev = null;
        do {
            if (key === current.key) {
                let temp = current.next;
                current.next = prev;
                prev.next = temp;
                if(prevprev) prevprev.next = current;
                else this.head = current;
                return current.value;
            }
            prevprev = prev;
            prev = current;
            current = current.next;
        } while(current);
    }
}