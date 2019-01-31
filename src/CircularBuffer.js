class CircularBuffer {
    constructor(size = 16) {
        this.collection = new Array(size);
        this.front = -1;
        this.rear = 0;
    }

    addToFront(key, value) {
        if(this.isFull()) {
            this.resize();
        }

        if(this.front === -1) {
            this.front = 0;
            this.rear = 0;
        }

        else if(this.front === 0) {
            this.front = this.collection.length - 1;
        }

        else {
            this.front--;
        }

        this.collection[this.front] = { key, value };
    }

    addToRear(key, value) {
        if(this.front === -1) {
            this.front = 0;
            this.rear = 0;
        }

        else if(this.rear === this.collection.length - 1) {
            this.rear = 0;
        }

        else this.rear++;

        this.collection[this.rear] = { key, value };
    }

    deleteFromFront() {
        const toReturn = this.collection[this.front];
        if(this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        
        else {
            if(this.front === this.collection.length - 1) {
                this.front = 0;
            }

            else {
                this.front++;
            }
        }

        return toReturn;
    }

    deleteFromRear() {
        const toReturn = this.collection[this.rear];
        if(this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        
        else {
            if(this.rear === 0) {
                this.rear = this.collection.length - 1;
            }

            else {
                this.rear--;
            }
        }

        return toReturn;
    }

    peekFront() {
        return this.collection[this.front];
    }

    peekRear() {
        return this.collection[this.rear];
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.front === 0 && this.rear === this.collection.length - 1) || (this.front === this.rear + 1);
    }

    resize() {
        let oldSize = this.collection.length;
        let newCollection = new Array(oldSize * 2);
        let i = 0;
        while(!this.isEmpty()) {
            const element = this.deleteFromFront();
            newCollection[i] = element;
            i++;
        }

        this.collection = newCollection;
        this.front = 0;
        this.rear = oldSize - 1;
    }
}