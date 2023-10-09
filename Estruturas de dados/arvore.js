class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderTraversal(node = this.root) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.data);
            this.inorderTraversal(node.right);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            const minRight = this.findMinNode(node.right);
            node.data = minRight.data;
            node.right = this.removeNode(node.right, minRight.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    levelorderTraversal() {
        if (this.root === null) {
            return;
        }

        const queue = [];
        queue.push(this.root);

        while (queue.length !== 0) {
            const node = queue.shift();
            console.log(node.data);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }
    }

    max() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    min() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, key) {
        if (node === null || node.data === key) {
            return node;
        }

        if (key < node.data) {
            return this.searchNode(node.left, key);
        }

        return this.searchNode(node.right, key);
    }
}

function exampleTree() {
    const values = [61, 89, 66, 43, 51, 16, 55, 11, 79, 77, 82, 32];
    const tree = new BinarySearchTree();
    values.forEach((v) => tree.insert(v));
    return tree;
}

function extendedTree() {
    const values = [61, 89, 66, 43, 51, 16, 55, 11, 79, 77, 82, 32, 100, 90];
    const tree = new BinarySearchTree();
    values.forEach((v) => tree.insert(v));
    return tree;
}

const bst = extendedTree();
console.log("Percurso em ordem:");
bst.inorderTraversal();

console.log("\nRemovendo o elemento 61:");
bst.remove(61);
bst.inorderTraversal();

console.log("\nPercurso em nível:");
bst.levelorderTraversal();

console.log("\n-------");
console.log("Máximo:", bst.max());
console.log("Mínimo:", bst.min());

const items = [1, 3, 981, 510, 1000];
for (const item of items) {
    const result = bst.search(item);
    if (result === null) {
        console.log(item, "não encontrado");
    } else {
        console.log(result.data, "encontrado");
    }
}


