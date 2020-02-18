const Stack = require('./stack');

const sortStack = stack => {
    if (!stack.isEmpty()) {
        let value = stack.pop();
        sortStack(stack);
        insert(stack, value);
    }
    return stack;
}

const insert = (stack, value) => {
    if (stack.isEmpty() || value < stack.getTop()) {
        stack.push(value);
    } else {
        let temp = stack.pop();
        insert(stack, value);
        stack.push(temp);
    }
}

// TC: O(n^2)