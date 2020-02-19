const Stack = require('./stack');

class minStack {
    constructor() {
        this.mainStack = new Stack();
        this.minStack = new Stack();
    }

    pop() {
        this.minStack.pop();
        return this.mainStack.pop();
    }

    push(val) {
        this.mainStack.push(val);
        if (val > this.minStack.getTop() && this.minStack.isEmpty() === false) {
            this.minStack.push(this.minStack.getTop());
        } else {
            this.minStack.push(val);
        }
    }

    min() {
        return this.minStack.getTop();
    }
}