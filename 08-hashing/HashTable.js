class HashEntry {
    constructor(key, data) {
        this.key = key;
        this.value = data;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.slots = 10;
        this.size = 0;
        this.bucket = Array(this.slots).fill(null);
        this.threshold = 0.6;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    getIndex(key) {
        let index = key % this.slots;
        return index;
    }

    insert(key, value) {
        let bIndex = this.getIndex(key);
        if (this.bucket[bIndex] === null) {
            this.bucket[bIndex] = new HashEntry(key, value);
            console.log(`${String(key)}, ${String(value)} - inserted`);
        } else {
            let head = this.bucket[bIndex];
            while (head !== null) {
                if (head.key === key) {
                    head.value = value;
                    break;
                } else if (head.next === null) {
                    head.next = new HashEntry(key, value);
                    console.log(`${String(key)}, ${String(value)} - inserted`);
                    break;
                }
                head = head.next;
            }
        }
        this.size += 1;
        let loadFactor = Number(this.size) / Number(this.slots);
        if (loadFactor >= this.threshold) {
            this.resize()
        }
    }

    resize() {
        let newSlots = this.slots * 2;
        let newBucket = Array(this.newSlots).fill(null);
        for (let i = 0; i < this.bucket.length; i++) {
            let head = this.bucket[i];
            while (head !== null) {
                let newIndex = this.getIndex(head.key);
                if (newBucket[newIndex] === null) {
                    newBucket[newIndex] = new HashEntry(head.key, head.value);
                } else {
                    let node = newBucket[newIndex];
                    while (node !== null) {
                        if (node.key === head.key) {
                            node.value = head.value;
                            node = null;
                        } else if (node.next === null) {
                            node.next = new HashEntry(head.key, head.value);
                            node = null;
                        } else {
                            node = node.next;
                        }
                    }
                }
                head = head.next;
            }
        }
        this.bucket = newBucket;
        this.slots = newSlots;
    }

    search(key) {
        let bIndex = this.getIndex(key);
        let head = this.bucket[bIndex];
        if (head !== null) {
            while (head !== null) {
                if (head.key === key) {
                    return head.value;
                }
                head = head.next;
            }
        }
        console.log("Key not found");
        return null;
    }

    delete(key) {
        let bIndex = this.getIndex(key);
        let head = this.bucket[bIndex];
        if (head.key === key) {
            this.bucket[bIndex] = head.next;
            console.log("key deleted");
            this.size -= 1;
            return this;
        }
        let prev = null;
        while (head !== null) {
            if (head.key === key) {
                prev.next = head.next;
                console.log("key deleted");
                return this;
            }
            prev = head;
            head = head.next;
        }
        console.log("key not found");
        return null;
    }
}