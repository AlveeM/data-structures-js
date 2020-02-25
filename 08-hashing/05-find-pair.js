// find two pairs in an array such that a + b = c + d

const HashTable = require('./HashTable');

const findPair = list => {
    let result = [];
    let hMap = new HashTable();

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            let sum = list[i] + list[j];
            if (hMap.search(sum) === null) {
                hMap.insert(sum, [list[i], list[j]]);
            } else {
                let prevPair = hMap.search(sum);
                let secondPair = [list[i], list[j]];
                result.push(prevPair);
                result.push(secondPair);
                return result;
            }
        }
    }

    return result;
}

// TC: O(n ^ 2)