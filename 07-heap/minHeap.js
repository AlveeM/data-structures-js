class minHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.__percolateUp(this.heap.length - 1);
    }

    getMin() {
        if (this.heap.length !== 0) {
            return this.heap[0];
        }
        return null;
    }

    removeMin() {
        if (this.heap.length > 1) {
            let min = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1, 1);
            this.__minHeapify(0);
            return min;
        } else if (this.heap.length === 1) {
            let min = this.heap[0];
            this.heap.splice(this.heap.length - 1, 1);
            return min;
        } else {
            return null;
        }
    }

    __percolateUp(index) {
        let parent = Math.floor((index - 1) / 2);
        if (index <= 0) {
            return;
        } else if (this.heap[parent] > this.heap[index]) {
            let tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            this.__percolateUp(parent);
        }
    }

    __minHeapify(index) {
        let left = (index * 2) + 1;
        let right = (index * 2) + 2;
        let smallest = index;
        if ((this.heap.length > left) && (this.heap[smallest] > this.heap[left])) {
            smallest = left;
        }
        if ((this.heap.length > right) && (this.heap[smallest] > this.heap[right])) {
            smallest = right;
        }
        if (smallest !== index) {
            let tmp = this.heap[smallest];
            this.heap[smallest] = this.heap[index];
            this.heap[index] = tmp;
            this.__minHeapify(smallest);
        }
    }

    buildHeap(arr) {
        this.heap = arr;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.__minHeapify(i);
        }
    }
}