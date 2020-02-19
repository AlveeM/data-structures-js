const Stack = require('./stack');

const evaluatePostfix = exp => {
    let stack = new Stack();
    let op1, op2
    for (let i = 0; i < exp.length; i++) {
        if (!isNaN(parseInt(exp[i], 10))) {
            stack.push(parseInt(exp[i], 10));
        } else {
            op1 = stack.pop();
            op2 = stack.pop();
            if (exp[i] === '+') {
                stack.push(op1 + op2);
            } else if (exp[i] === '-') {
                stack.push(op2 - op1);
            } else if (exp[i] === '*') {
                stack.push(op1 * op2);
            } else if (exp[i] === '/') {
                stack.push(op2 / op1);
            }
        }
    }
    return stack.pop();
}

// TC: O(n)