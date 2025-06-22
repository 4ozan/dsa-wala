class Queue {
    constructor() {
        this.queue = [];
        this.length = 0; // Keeping track of length is good for efficiency
    }

    // Add an element to the back of the queue (FIFO)
    enqueue(value) {
        this.queue.push(value); // Add to the end
        this.length++;
    }

    // Remove an element from the front of the queue (FIFO)
    dequeue() {
        if (this.length > 0) {
            this.length--; // Decrement length first
            return this.queue.shift(); // Remove from the beginning and return it
        }
        return undefined; // Or throw an error, or return null, indicating empty queue
    }

    // Look at the element at the front of the queue without removing it
    peek() {
        if (this.length > 0) {
            return this.queue[0]; // The first element is the next to be dequeued
        }
        return undefined; // Or null, indicating empty queue
    }

    // Optional: Check if the queue is empty
    isEmpty() {
        return this.length === 0;
    }

    // Optional: Get the current size of the queue
    size() {
        return this.length;
    }
}

// --- Example Usage ---
const myQueue = new Queue();

console.log("Is empty?", myQueue.isEmpty()); // true

myQueue.enqueue("Alice");
myQueue.enqueue("Bob");
myQueue.enqueue("Charlie");

console.log("Queue after enqueuing:", myQueue.queue); // [ 'Alice', 'Bob', 'Charlie' ]
console.log("Queue length:", myQueue.size()); // 3
console.log("Next to dequeue (peek):", myQueue.peek()); // Alice

const dequeued1 = myQueue.dequeue();
console.log("Dequeued:", dequeued1); // Alice
console.log("Queue after dequeue:", myQueue.queue); // [ 'Bob', 'Charlie' ]
console.log("Queue length:", myQueue.size()); // 2

myQueue.enqueue("David");
console.log("Queue after enqueuing David:", myQueue.queue); // [ 'Bob', 'Charlie', 'David' ]

console.log("Next to dequeue (peek):", myQueue.peek()); // Bob

const dequeued2 = myQueue.dequeue();
const dequeued3 = myQueue.dequeue();
const dequeued4 = myQueue.dequeue(); // Trying to dequeue from empty queue

console.log("Dequeued:", dequeued2, dequeued3, dequeued4); // Bob Charlie David undefined
console.log("Queue after all dequeues:", myQueue.queue); // []
console.log("Queue length:", myQueue.size()); // 0
console.log("Is empty?", myQueue.isEmpty()); // true