const LinkedList = require('./LinkedList');

const detectLoop = list => {
    let slow = list.head;
    let fast = list.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast){
            return true;
        }
    }
    return false;
}

// TC: O(n)

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.getHead();
let node = list.getHead();

for(var i=0; i<4; i++){
  if(node.next === null){
    node.next = head.next;
    break;
  }
  node = node.next
}

console.log(detectLoop(list))