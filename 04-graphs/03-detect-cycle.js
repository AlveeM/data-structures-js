const Stack = require('../03-stack-queue/stack');
const Graph = require('../04-graphs/Graph');

const detectCycle = (g, source) => {
    let numVertices = g.vertices;
    let visited = Array(numVertices).fill(false);
    let stack = new Stack(numVertices);
    stack.push(source);
    visited[source] = true;
    while (!stack.isEmpty()) {
        let currentNode = stack.pop();
        let temp = g.list[currentNode].getHead();
        while (temp !== null) {
            if (visited[temp.data] === false) {
                stack.push(temp.data);
                visited[temp.data] = true;
            } else {
                return true;
            }
            temp = temp.next;
        }
    }
    return false;
}

// TC: O(V + E)

let g=new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(detectCycle(g, 0));
g.addEdge(4, 0)
console.log(detectCycle(g, 0));