const LinkedList = require('./LinkedList');

const union = (list1, list2) => {
    if (list1.isEmpty()) {
        return list2;
    } else if (list2.isEmpty()) {
        return list1;
    }

    let currentNode = list1.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
    currentNode.next = list2.head;
    return removeDuplicates(list1);
}

const intersection = (list1, list2) => {
    let result = new LinkedList();
    let visitedNodes = new Set();
    let currentNode = list2.head;

    while (currentNode !== null) {
        let value = currentNode.data;
        if (!(visitedNodes.has(value))) {
            visitedNodes.add(value);
        }
        currentNode = currentNode.next;
    }

    currentNode = list1.head;
    while (currentNode !== null) {
        let value = currentNode.data;
        if (visitedNodes.has(value)) {
            result.insertAtTail(value);
        }
        currentNode = currentNode.next;
    }

    return result;
}

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

// TC: O(m + n) [m -> list1 size, n -> list2 size]

let ulist1 = new LinkedList();
let ulist2 = new LinkedList();
ulist1.insertAtHead(8);
ulist1.insertAtHead(22);
ulist1.insertAtHead(15);
ulist1.printList();

ulist2.insertAtHead(21);
ulist2.insertAtHead(14);
ulist2.insertAtHead(7);
ulist2.printList();

let res1 = union(ulist1, ulist2);
res1.printList();


ulist1 = new LinkedList();
ulist2 = new LinkedList();
ulist1.insertAtHead(8);
ulist1.insertAtHead(22);
ulist1.insertAtHead(15);
ulist1.insertAtHead(14);
ulist1.printList();

ulist2.insertAtHead(21);
ulist2.insertAtHead(14);
ulist2.insertAtHead(7);
ulist2.printList();
let res2 = intersection(ulist1, ulist2);
res2.printList();