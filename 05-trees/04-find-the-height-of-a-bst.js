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

var BST = new BinarySearchTree(6)
BST.insertBST(4)
BST.insertBST(9)
BST.insertBST(5)
BST.insertBST(2)
BST.insertBST(8)
BST.insertBST(12)
console.log(findHeight(BST.root))