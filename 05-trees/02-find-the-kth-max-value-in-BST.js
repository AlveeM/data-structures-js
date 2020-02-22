const BinarySearchTree = require('./BinarySearchTree');

let counter;
const findKthMax = (rootNode, k) => {
    counter = 0;
    return reverseInOrder(rootNode, k).val;
}

const reverseInOrder = (rootNode, k) => {
    if (rootNode) {
        let rightChild = reverseInOrder(rootNode.rightChild, k);

        if (rightChild) {
            if (counter === k) {
                return rightChild;
            }
        } else {
            counter++;
            if (k === counter) {
                return rootNode;
            }
            return reverseInOrder(rootNode.leftChild, k);
        }
    }
}

// TC: O(n)