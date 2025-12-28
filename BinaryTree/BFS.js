// BFS (Breadth-First Search) / Level-Order Traversal

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
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        // Go LEFT
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }

        }
        // Go RIGHT
        else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    BreadthFirstSearch() {
        if (this.root === null) {
            return [];
        }

        const queue = [];
        const result = [];

        queue.push(this.root);

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }
}

const bst = new BinarySearchTree()

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Breadth first search: ", bst.BreadthFirstSearch());


