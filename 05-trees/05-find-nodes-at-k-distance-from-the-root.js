const BinarySearchTree = require('./BinarySearchTree');

const findKNodes = (rootNode, k) => {
    let result = [];
    findK(rootNode, k, result);
    return result;
}

const findK = (rootNode, k, result) => {
    if (rootNode === null) {
        return;
    }

    if (k === 0) {
        result.push(rootNode.val);
    } else {
        findK(rootNode.leftChild, k - 1, result);
        findK(rootNode.rightChild, k - 1, result);
    }
}

// TC: O(k)