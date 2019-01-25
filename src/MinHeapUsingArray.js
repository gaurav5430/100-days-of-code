class MinHeapUsingArray {
    constructor() {
        this.collection = [];
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
        while(i != 0 && this.collection[this.getParentIndex(i)].key > this.collection[i].key) {
            this.swapElement(i, this.getParentIndex(i)); 
            i = this.getParentIndex(i);
        }
    }

    pop() {
        const root = this.collection[0];
        this.collection[0] = this.collection[this.collection.length - 1];
        this.collection.length--;
        if(this.collection.length > 1) this.heapify(0);
        return root;
    }

    peek() {
        return this.collection[0];
    }

    deleteAtIndex(index) {
        const root = this.peek();
        this.collection[index].key = root.key;
        this.collection[index].value = root.value;
        while (index !=0 && this.collection[this.getParentIndex(index)].key > root.key) {
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

    heapify(index) {
        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);
        let smallest = index;
        if(leftIndex < this.collection.length - 1 && this.collection[leftIndex].key < this.collection[smallest].key) {
            smallest = leftIndex;
        }

        if(rightIndex < this.collection.length - 1 && this.collection[rightIndex].key < this.collection[smallest].key) {
            smallest = rightIndex;
        }

        if(smallest !== index) {
            this.swapElement(index, smallest);
            this.heapify(smallest);
        }


    }


}