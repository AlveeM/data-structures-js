const Graph = require('./Graph');

const removeEdge = (g, source, destination) => {
    let length = g.list.length;

    if (length === 0) {
        return g;
    }

    if (source >= length || source < 0) {
        return g;
    }

    if (destination >= length || destination < 0) {
        return g;
    }

    g.list[source].deleteAtValue(destination);
    return g;
}

// TC: O(E)

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 0);
console.log("Before removing edge")
g.printGraph();

removeEdge(g, 1, 3);

console.log("\nAfter removing edge")
g.printGraph();