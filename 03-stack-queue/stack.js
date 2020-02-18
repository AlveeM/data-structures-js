class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    getTop() {
        return this.top;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    push(val) {
        this.items.push(val);
        this.top = val;
    }

    pop() {
        const length = this.items.length;
        if (length !== 0) {
            if (length === 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[length - 2];
                return this.items.pop();
            }
        } else {
            return null;
        }
    }
}

module.exports = Stack;