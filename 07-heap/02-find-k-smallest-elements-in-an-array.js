const minHeap = require('./minHeap');

const findKSmallest = (arr, k) => {
    let heap = new minHeap();
    heap.buildHeap(arr);
    let result = [];

    for (let i = 0; i < k; i++) {
        result.push(heap.removeMin());
    }

    return result;
}

// TC: O(n + k log n)