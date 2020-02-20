const Stack = require('../03-stack-queue/stack');
const Graph = require('./Graph');

const checkPath = (g, source, destination) => {
    let visited = Array(g.vertices).fill(false);
    let stack = new Stack(g.vertices);
    stack.push(source);
    visited[source] = true;
    while (!stack.isEmpty()) {
        let currentNode = stack.pop();
        let temp = g.list[currentNode].head;
        while (temp !== null) {
            if (visited[temp.data] === false) {
                if (temp.data === destination) {
                    return true;
                }
                stack.push(temp.data);
                visited[temp.data] = true;
            }
            temp = temp.next;
        }
    }
    return false;
}

// TC: O(V + E)

let g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(1, 2);
console.log(checkPath(g, 0, 2));