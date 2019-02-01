class HeapUsingArray {
    constructor() {
        this.collection = [];
        this.comparatorFn = (a, b) => {
            return a.key - b.key;
        }
    }

    getParentIndex(index) {
        return parseInt((index - 1)/2);
    }

    getLeftChildIndex(index) {
        return 2*index + 1;
    }

    getRightChildIndex(index) {
        return 2*index + 2;
    }

    swapElement(i, j) {
        let temp = { key: this.collection[j].key, value: this.collection[j].value };
        this.collection[j].key = this.collection[i].key;
        this.collection[j].value = this.collection[i].value;
        this.collection[i].key = temp.key;
        this.collection[i].value = temp.value;
    }

    push(key, value) {
        this.collection.push({ key, value });
        let i = this.collection.length - 1;

        //this.collection[this.getParentIndex(i)].key > this.collection[i].key
        while(i >= 0 && this.comparatorFn(this.collection[this.getParentIndex(i)], this.collection[i]) > 0) {
            this.swapElement(i, this.getParentIndex(i)); 
            i = this.getParentIndex(i);
        }
    }

    pop() {
        const root = this.collection[0];
        this.collection[0] = this.collection[this.collection.length - 1];
        this.collection.length--;
        if(this.collection.length > 1) this.heapifySiftDown(0);
        return root;
    }

    peek() {
        return this.collection[0];
    }

    deleteAtIndex(index) {
        const root = this.peek();
        this.collection[index].key = root.key;
        this.collection[index].value = root.value;
        //this.collection[this.getParentIndex(index)].key > root.key
        while (index !=0 && this.comparatorFn(this.collection[this.getParentIndex(index)], this.collection[index]) > 0) {
            this.swapElement(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }

        this.pop();
    }

    deleteKey(key) {
        const index = this.indexOf(key);
        this.deleteAtIndex(index);
    }

    indexOf(key) {
        for(let index of this.collection.keys()) {
            if(this.collection[index] === key) {
                return index;
            }
        }
    }

    heapifySiftDown(index) {
        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);
        let smallest = index;
        if(leftIndex < this.collection.length && this.comparatorFn(this.collection[smallest], this.collection[leftIndex]) > 0 ) {
            smallest = leftIndex;
        }

        if(rightIndex < this.collection.length && this.comparatorFn(this.collection[smallest], this.collection[rightIndex]) > 0) {
            smallest = rightIndex;
        }

        if(smallest !== index) {
            this.swapElement(index, smallest);
            this.heapifySiftDown(smallest);
        }
    }

    heapifySiftUp(index) {
        let current = index;
        const parentIndex = this.getParentIndex(index);
        if(parentIndex >= 0 && this.comparatorFn(this.collection[parentIndex], this.collection[current]) > 0) {
            this.swapElement(index, parentIndex);
            this.heapifySiftUp(parentIndex);
        }
    }

    isEmpty() {
         return this.collection.length === 0;
    }

    buildHeap(array) {
        this.collection = array;
        for(let i = this.collection.length - 1; i >= 0; i--) {
            if(this.getParentIndex(i) >= 0) {
                this.heapifySiftDown(this.getParentIndex(i));
            }
        }

        // for(let i = this.collection.length - 1; i >= 0; i--) {
        //     this.heapifySiftUp(i);
        // }
    }

}