const Graph = require('./Graph');

const isTree = g => {
    let visited = Array(g.vertices).fill(false);

    if (checkCycle(g, 0, visited, -1) === true) {
        return false;
    }

    for (let i = 0; i < visited.length; i++) {
        if (visited[i] === false) {
            return false;
        }
    }
    return true;
}

const checkCycle = (g, node, visited, parent) => {
    visited[node] = true;
    let adjacent = g.list[node].head;
    while (adjacent !== null) {
        if (visited[adjacent.data] === false) {
            if (checkCycle(g, adjacent.data, visited, node) === true) {
                return true;
            }
        } else if (adjacent.data !== parent) {
            return true;
        }
        adjacent = adjacent.next;
    }
    return false;
}

// TC: O(V + E)

let g1=new Graph(3);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
console.log(isTree(g1));

let g2=new Graph(3);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
console.log(isTree(g2));