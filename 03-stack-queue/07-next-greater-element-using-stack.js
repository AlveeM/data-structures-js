const Stack = require('./stack');

const nextGreaterElement = arr => {
    let stack = new Stack();
    let result = [];
    let top, next;

    for (let i = arr.length - 1; i >= 0; i--) {
        next = arr[i];
        if (stack.isEmpty() === false) {
            top = stack.getTop();
            console.log(top);
            while (top <= next) {
                if (stack.isEmpty()) {
                    break;
                }
                stack.pop();
                top = stack.getTop();
            }
        }
        if (!stack.isEmpty()) {
            result[i] = stack.getTop();
        } else {
            result[i] = -1;
        }
        stack.push(next);
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " --> " + result[i]);
    }
    return result;
}

// TC: O(n)