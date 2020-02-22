class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    // iterative
    // insert(value) {
    //     if (this.root === null) {
    //         this.root = new Node(value);
    //         return;
    //     }
    //     let currentNode = this.root;
    //     let parent;
    //     while (currentNode) {
    //         parent = currentNode;
    //         if (value < currentNode.value) {
    //             currentNode = currentNode.leftChild;
    //         } else {
    //             currentNode = currentNode.rightChild;
    //         }
    //     }
    //     if (value < parent.val) {
    //         parent.leftChild = new Node(value);
    //     } else {
    //         parent.rightChild = new Node(value);
    //     }
    // }

    // recursive
    insert(currentNode, value) {
        if (currentNode === null) {
            currentNode = new Node(value);
        } else if (value < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, value);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, value);
        }
        return currentNode;
    }

    insertBST(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }
        this.insert(this.root, value);
    }

    preOrderPrint(currentNode) {
        if (currentNode !== null) {
            console.log(currentNode.val);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }

    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.val);
            this.inOrderPrint(currentNode.rightChild);
        }
    }

    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.val);
        }
    }

    search(currentNode, value) {
        if (currentNode !== null) {
            if (value === currentNode.val) {
                return currentNode;
            } else if (value < currentNode.val) {
                return this.search(currentNode.leftChild, value);
            } else {
                return this.search(currentNode.rightChild, value);
            }
        } else {
            return null;
        }
    }

    searchBST(value) {
        return this.search(this.root, value);
    }

    delete(currentNode, value) {
        // case 1: empty tree
        if (currentNode === null) {
            return false;
        }

        let parentNode;
        while (currentNode && (currentNode.val !== value)) {
            parentNode = currentNode;
            if (value < currentNode.leftChild) {
                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;
            }
        }

        // case 2: value not found
        if (currentNode === null) {
            return false;
        // case 3: currentNode is a leaf node
        } else if (currentNode.leftChild === null && currentNode.rightChild === null) {
            if (currentNode.val === this.root.val) {
                this.root = null;
                return true;
            } else if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        // case 4: node with a left child only
        } else if (currentNode.rightChild === null) {
            if (currentNode.val === this.root.val) {
                this.root = currentNode.leftChild;
                return true;
            } else if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.leftChild;
                return true;
            }
        // case 5: node with a right child only
        } else if (currentNode.leftChild === null) {
            if (currentNode.val === this.root.val) {
                this.root = currentNode.rightChild;
                return true;
            } else if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.rightChild;
                return true;
            }
        // case 6: node to be deleted has 2 children
        } else {
            let minRight = currentNode.rightChild;
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild;
            }
            let temp = minRight.val;
            this.delete(this.root, minRight.val);
            currentNode.val = temp;
            return true;
        }
    }
}