const BinarySearchTree = require('./BinarySearchTree');

const findAncestors = (rootNode, k) => {
    let result = [];
    findAncestorsHelper(rootNode, k, result);
    return result;
}

const findAncestorsHelper = (rootNode, k, result) => {
    if (rootNode === null) {
        return false;
    } else if (rootNode.val === k) {
        return true;
    } else if ((findAncestorsHelper(rootNode.leftChild, k, result)) || (findAncestorsHelper(rootNode.rightChild, k, result))) {
        result.push(rootNode.val);
        return true;
    }
    return false;
}

// TC: O(n)