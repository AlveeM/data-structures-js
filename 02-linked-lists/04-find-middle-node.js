const LinkedList = require('./LinkedList');

const findMid = list => {
    if (list.isEmpty()) {
        return null;
    }

    let slow = list.head;
    let fast = list.head;

    if (slow.next === null) {
        return slow;
    }

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// TC: O(n)

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(8);
list.insertAtHead(11);
list.insertAtHead(7);


list.printList();

console.log(findMid(list).data);