const Queue = require('./queue');
const Stack = require('./stack');

const reverseK = (queue, k) => {
    if (queue.isEmpty() === false) {
        let stack = new Stack();
        let count = 0;
        while (count < k) {
            stack.push(queue.dequeue());
            count++;
        }
        let size;
        while (stack.isEmpty() === false) {
            queue.enqueue(stack.pop());
        }
        size = queue.size();
        for (let i = 0; i < size - k; i++) {
            queue.enqueue(queue.dequeue());
        }
    }
    return queue;
}

// TC: O(n)