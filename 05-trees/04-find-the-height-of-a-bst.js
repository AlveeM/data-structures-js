const BinarySearchTree = require('./BinarySearchTree');

const findHeight = rootNode => {
    if (rootNode === null) {
        return 0;
    } else if (rootNode.leftChild === null && rootNode.rightChild === null) {
        return 0;
    } else {
        let leftHeight = findHeight(rootNode.leftChild);
        let rightHeight = findHeight(rootNode.rightChild);
        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }
}

// TC: O(n)