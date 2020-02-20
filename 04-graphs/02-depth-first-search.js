const Stack = require('../03-stack-queue/stack');
const Graph = require('./Graph');

const dfs = (g, source) => {
    let result = "";
    let numVertices = g.vertices;
    let visited = [];
    for (let i = 0; i < numVertices; i++) {
        visited.push(false);
    }
    let stack = new Stack(numVertices);
    stack.push(source);
    visited[source] = true;
    while (!stack.isEmpty()) {
        let currentNode = stack.pop();
        result += String(currentNode);
        let temp = g.list[currentNode].getHead();
        while (temp !== null) {
            if (visited[temp.data] === false) {
                stack.push(temp.data);
            }
            temp = temp.next;
        }
        visited[currentNode] = true;
    }
    return result;
}

let g=new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
console.log(dfs(g, 0));