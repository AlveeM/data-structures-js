const LinkedList = require('./LinkedList');

const findNth = (list, n) => {
    let nthNode = list.head;
    let endNode = list.head;

    let count = 0;
    if (!list.isEmpty()) {
        while (count < n) {
            if (endNode === null) {
                console.log('Out of bounds');
                return null;
            }
            endNode = endNode.next;
            count++;
        }
    }
    while (endNode !== null) {
        endNode = endNode.next;
        nthNode = nthNode.next;
    }
    if (nthNode !== null) {
        return nthNode;
    } else {
        return null;
    }
}

let l1 = new LinkedList();
l1.insertAtHead(23);
l1.insertAtHead(76);
l1.insertAtHead(49);
l1.insertAtHead(54);
l1.insertAtHead(22);

for (var i = 1; i < 5; i++) {
  console.log(findNth(l1, i).data);
}
console.log(findNth(l1, 100));