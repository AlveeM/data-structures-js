const maxHeap = require('./maxHeap');

const findKLargest = (arr, k) => {
    let heap = new maxHeap();
    heap.buildHeap(arr);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.removeMax());
    }
    return result;
}