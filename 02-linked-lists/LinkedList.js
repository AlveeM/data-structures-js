class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return (this.head === null);
    }

    insertAtHead(data) {
        let tempNode = new Node(data);
        tempNode.next = this.head;
        this.head = tempNode;
        return this;
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        }

        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        return this;
    }

    search(val) {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.data === val) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    deleteAtHead() {
        if (this.isEmpty()) {
            return this;
        }

        let firstNode = this.head;
        this.head = firstNode.next;

        return this;
    }

    deleteAtValue(val) {
        if (this.isEmpty()) {
            return false;
        }

        let currentNode = this.head;

        if (currentNode.data === val) {
            this.head = currentNode.next;
            return true;
        }

        while (currentNode.next !== null) {
            if (currentNode.next.data === val) {
                currentNode.next = currentNode.next.next;
                return true
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    deleteAtTail() {
        if (this.isEmpty()) {
            return this;
        }

        let currentNode = this.head;

        if (currentNode.next === null) {
            this.deleteAtHead();
            return this;
        }

        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = null;
        return this;
    }

    printList() {
        if (this.isEmpty()) {
          console.log("Empty List");
          return false;
        } else {
            let temp = this.head;
            while (temp != null) {
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.next;
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
                st += " -> ";
                temp = temp.next;
            }
            st += "null";
            return st;
        }
    }
}

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(10);
list.insertAtHead(40);
list.insertAtHead(5);
list.printList();
list.deleteAtHead();
list.printList();
list.deleteAtTail();
list.printList();
console.log(list.search(4));
console.log(list.search(0));

module.exports = LinkedList;