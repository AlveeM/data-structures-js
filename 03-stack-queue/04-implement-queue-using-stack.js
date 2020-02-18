const Stack = require('./Stack.js');

class newQueue {
    constructor(size) {
        this.tempStack = new Stack();
        this.mainStack = new Stack();
    }
    enqueue(value) {
        this.mainStack.push(value);
    }

    dequeue() {
        if (this.mainStack.isEmpty() && this.tempStack.isEmpty()) {
            return null;
        } else if (this.tempStack.isEmpty()) {
            while (this.mainStack.isEmpty() === false) {
                this.tempStack.push(this.mainStack.pop());
            }
            return this.tempStack.pop();
        }
        return this.tempStack.pop();
    }
}