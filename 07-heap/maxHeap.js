class maxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.__percolateUp(this.heap.length - 1);
    }

    getMax() {
        if (this.heap.length !== 0) {
            return this.heap[0]
        }
        return null;
    }

    removeMax() {
        if (this.heap.length > 1) {
            let max = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1, 1);
            this.__maxHeapify(0)
            return max;
        } else if (this.heap.length === 1) {
            let max = this.heap[0];
            this.heap.splice(this.heap.length - 1, 1);
            return max;
        } else {
            return null;
        }
    }

    __percolateUp(index) {
        let parent = Math.floor((index - 1) / 2);
        if (index <= 0) {
            return;
        } else if (this.heap[parent] < this.heap[index]) {
            let tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            this.__percolateUp(parent);
        }
    }

    __maxHeapify(index) {
        let left = (index * 2) + 1;
        let right = (index * 2) + 2;
        let largest = index;
        if ((this.heap.length > left) && (this.heap[largest] < this.heap[left])) {
            largest = left;
        }
        if ((this.heap.length > right) && (this.heap[largest] < this.heap[right])) {
            largest = right;
        }
        if (largest !== index) {
            let  tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.__maxHeapify(largest);
        }
    }

    buildHeap(arr) {
        this.heap = arr;
        for (let i = this.heap.length - 1; i >= 0; i--) {
            this.__maxHeapify(i);
        }
    }
}

module.exports = maxHeap;