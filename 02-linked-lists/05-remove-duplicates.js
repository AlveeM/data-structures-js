const LinkedList = require('./LinkedList');

const removeDuplicates = list => {
    let currentNode = list.head;
    let prevNode = list.head;
    let visitedNodes = new Set();
    if (!list.isEmpty() && currentNode.next !== null) {
        while (currentNode !== null) {
            let value = currentNode.data;
            if (visitedNodes.has(value)) {
                prevNode.next = currentNode.next;
                currentNode = currentNode.next;
                continue;
            }
        visitedNodes.add(currentNode.data);
        prevNode = currentNode;
        currentNode = currentNode.next;
        }
    }
    return list;
}

// TC: O(n)

let list = new LinkedList();
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(22);
list.insertAtHead(14);
list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

list.printList();
removeDuplicates(list);
list.printList();