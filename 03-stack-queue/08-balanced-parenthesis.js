const Stack = require('./stack');

const isBalanced = exp => {
    let stack = new Stack();
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '}' || exp[i] === ')' || exp[i] === ']') {
            if (stack.isEmpty()) {
                return false;
            }
            let popped = stack.pop();
            if (((exp[i] === '}') && (popped !== "{")) || ((exp[i] === ")") && popped !== "(") || ((exp[i] === "]") && (popped !== "["))) {
                return false;
            }
        } else {
            stack.push(exp[i]);
        }
    }

    if (!stack.isEmpty()) {
        return false;
    }

    return true;
}

// TC: O(n)