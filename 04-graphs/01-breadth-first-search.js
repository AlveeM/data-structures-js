const LinkedList = require('../02-linked-lists/LinkedList');
const Queue = require('../03-stack-queue/queue');
const Graph = require('./Graph');

const bfs = (g, source) => {
    let result = "";
    let numVertices = g.vertices;
    let visited = [];
    for (let i = 0; i < numVertices; i++) {
        visited.push(false);
    }
    let queue = new Queue(numVertices);
    queue.enqueue(source);
    visited[source] = true;
    while (!queue.isEmpty()) {
        let currentNode = queue.dequeue();
        result += String(currentNode);
        let temp = g.list[currentNode].getHead();
        while (temp !== null) {
            if (visited[temp.data] === false) {
                queue.enqueue(temp.data);
                visited[temp.data] = true;
            }
            temp = temp.next;
        }
    }

    return result;
}

let g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 3);
g1.addEdge(1, 4);
console.log(bfs(g1, 0));