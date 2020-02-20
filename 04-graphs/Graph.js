const LinkedList = require('../02-linked-lists/LinkedList');

class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.list = [];
        for (let i = 0; i < vertices; i++) {
            let temp = new LinkedList();
            this.list.push(temp);
        }
    }

    addEdge(source, destination) {
        this.list[source].insertAtHead(destination);
    }

    printGraph() {
        console.log("Adjacency List:");
        for (let i = 0; i < this.list.length; i++) {
            process.stdout.write(`|${String(i)}| => `);
            let temp = this.list[i].getHead();
            while (temp !== null) {
                process.stdout.write(`[${String(temp.data)}] -> `);
                temp = temp.next;
            }
            console.log("null ");
        }
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();