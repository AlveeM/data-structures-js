const LinkedList = require('./LinkedList');

const reverse = list => {
    let prevNode = null;
    let currentNode = list.head;
    let nextNode = null;

    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }

    list.head = prevNode;
    return list;
}

// TC: O(n)

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(9);
list.insertAtHead(6);
list.insertAtHead(1);
list.insertAtHead(0);
list.printList();
reverse(list);
list.printList();