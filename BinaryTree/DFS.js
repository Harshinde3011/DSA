class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        console.log(`\nInserting ${value} into BST`);

        const newNode = new Node(value);

        if (this.isEmpty()) {
            console.log(`Tree is empty. Setting ${value} as root`);
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        console.log(
            `Comparing newNode (${newNode.value}) with root (${root.value})`
        );

        // Go LEFT
        if (newNode.value < root.value) {
            console.log(`${newNode.value} < ${root.value} → Go LEFT`);

            if (root.left === null) {
                console.log(`Left child is empty. Inserting ${newNode.value}`);
                root.left = newNode;
            } else {
                console.log(`Moving to left child (${root.left.value})`);
                this.insertNode(root.left, newNode);
            }

        }
        // Go RIGHT
        else {
            console.log(`${newNode.value} >= ${root.value} → Go RIGHT`);

            if (root.right === null) {
                console.log(`Right child is empty. Inserting ${newNode.value}`);
                root.right = newNode;
            } else {
                console.log(`Moving to right child (${root.right.value})`);
                this.insertNode(root.right, newNode);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.preOrder(root.left);
            console.log(root.value);
            this.preOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    }
}

const bst = new BinarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("pre order traversal: ", bst.preOrder(bst.root));
console.log("In order traversal: ", bst.inOrder(bst.root));
console.log("post order traversal: ", bst.postOrder(bst.root));