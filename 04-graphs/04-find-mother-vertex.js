const Stack = require('../03-stack-queue/stack');
const Graph = require('./Graph');

const findMotherVertex = g => {
    let visited = [];
    visited = Array(g.vertices).fill(false);

    let lastV = 0;

    for (let i = 0; i < g.vertices; i++) {
        if (visited[i] === false) {
            DFS(g, i, visited);
            lastV = i;
        }
    }

    visited = Array(g.vertices).fill(false);
    DFS(g, lastV, visited);

    for (let j = 0; j < visited.length; j++) {
        if (visited[j] === false) {
            return -1;
        }
    }
    return lastV;
}

const DFS = (g, node, visited) => {
    visited[node] = true;
    let temp = g.list[node].head;
    while (temp) {
        if (visited[temp.data] === false) {
            DFS(g, temp.data, visited);
        }
        temp = temp.next;
    }
}

// TC: O(V + E)

let g = new Graph(4);
g.addEdge(0,1);
g.addEdge(1,2);
g.addEdge(3,0);
g.addEdge(3,1);
console.log(findMotherVertex(g));