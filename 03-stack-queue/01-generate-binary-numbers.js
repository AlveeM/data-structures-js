const Queue = require('./queue');

const findBin = n => {
    debugger;
    let result = [];
    queue = new Queue();
    let s1, s2;

    queue.enqueue("1");
    for (let i = 0; i < n; i++) {
        result.push(queue.dequeue());
        s1 = result[i] + "0";
        s2 = result[i] + "1";
        queue.enqueue(s1);
        queue.enqueue(s2);
    }

    return result;
}

// TC: O(n)

console.log(findBin(5));