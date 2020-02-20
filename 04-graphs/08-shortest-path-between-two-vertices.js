const Graph = require('./Graph');
const Queue = require('../03-stack-queue/queue');

const findShortestPath = (g, a, b) => {
    let numVertices = g.vertices;
    let visited = Array(numVertices).fill(false);
    let distance = Array(numVertices).fill(-1);
    let queue = new Queue(numVertices);
    console.log(visited);
    console.log(distance);
    queue.enqueue(a);
    visited[a] = true;
    while (!queue.isEmpty()) {
        let currentNode = queue.dequeue();
        let temp = g.list[currentNode].head;
        while (temp !== null) {
            if (visited[temp.data] === false) {
                queue.enqueue(temp.data);
                visited[currentNode] = true;
                if (distance[temp.data] === -1) {
                    distance[temp.data] = distance[currentNode] + 1;
                } else if (distance[temp.data] > distance[currentNode] + 1) {
                    distance[temp.data] = distance[currentNode] + 1;
                }
            }
            temp = temp.next;
        }
    }

    if (distance[b] !== -1) {
        return distance[b] + 1;
    }
    return distance[b];
}

// TC: O(V + E)

let g = new Graph(7);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(4,5);
g.addEdge(2,5);
g.addEdge(5,6);
g.addEdge(3,6);
console.log(findShortestPath(g, 1, 6));