class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() { 
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value); // Create the new node once

        // Case 1: Tree is empty, set new node as root
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            // If new value is less than current node's value, go left
            if (value < current.value) { // Compared 'value' directly to 'current.value'
                if (current.left === null) { // Check if left child is empty
                    current.left = newNode; // Insert new node here
                    return; // Insertion complete
                }
                current = current.left; // Move to the left child
            }
            // If new value is greater than or equal to current node's value, go right
            else { // Using 'else' covers both greater than and equal to
                if (current.right === null) { // Check if right child is empty
                    current.right = newNode; // Insert new node here
                    return; // Insertion complete
                }
                current = current.right; // Move to the right child
            }
        }
    }
}
   

const tree= new Tree();
tree.add(2)
tree.add(23)
tree.add(20)