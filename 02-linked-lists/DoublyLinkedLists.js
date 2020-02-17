class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null;
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        if (isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }

    insertAtTail(data) {
        let newNode = new Node(data);
        newNode.prev = this.tail;
        if (isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    deleteAtHead() {
        if (isEmpty()) {
            return this;
        }
        let firstNode = this.head;
        this.head = firstNode.next;
        if (this.head === null) {
            this.tail = null;
            return this;
        }
        this.head.prev = null;
        return this;
    }

    deleteAtTail() {
        if (isEmpty()) {
            return this;
        }
        let lastNode = this.tail;
        this.tail = lastNode.prev;
        if (this.tail === null) {
            this.head = null;
            return this;
        }
        this.tail.next = null;
        return this;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    printList() {
        if (this.isEmpty()) {
          console.log("Empty List");
          return false;
        } else {
          let temp = this.head;
          while (temp != null) {
            process.stdout.write(String(temp.data));
            process.stdout.write(" <-> ");
            temp = temp.nextElement;
          }
          console.log("null");
          return true;
        }
    }

    getHead() {
        return this.head;
    }

    getListStr() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return "null";
        } else {
          let st = "";
          let temp = this.head
          while (temp != null) {
            st += String(temp.data);
            st += " <-> ";
            temp = temp.nextElement;
          }
          st += "null";
          return st;
        }
    }
}

module.exports = DoublyLinkedList;