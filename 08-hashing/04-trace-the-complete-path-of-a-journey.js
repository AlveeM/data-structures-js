const tracePath = map => {
    debugger;
    let result = [];
    let reverseMap = {};

    for (let key in map) {
        reverseMap[map[key]] = key;
    }

    let fromLoc = null;
    for (let key in map) {
        if (reverseMap[key] === undefined) {
            fromLoc = key;
            break;
        }
    }

    let to = map[fromLoc];
    while (to !== undefined) {
        result.push([fromLoc, to]);
        fromLoc = to;
        to = map[to];
    }

    return result;
}

// TC: O(n)