const BinarySearchTree = require('./BinarySearchTree');

const findMin = rootNode => {
    if (rootNode === null) {
        return null;
    }

    while (rootNode.leftChild) {
        rootNode = rootNode.leftChild;
    }
    return rootNode.val;
}

// TC: O(n)