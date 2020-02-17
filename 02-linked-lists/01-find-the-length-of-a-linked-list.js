const LinkedList = require('./LinkedList');

const length = list => {
    let length = 0;
    let currentNode = list.head;
    while (currentNode.next !== null) {
        length++;
        currentNode = currentNode.next;
    }
    return length;
}

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(3);
list.insertAtHead(2);
list.insertAtHead(1);
list.insertAtHead(0);
console.log(length(list));