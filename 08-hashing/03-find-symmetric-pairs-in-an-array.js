const HashTable = require('./HashTable');

const findSymmetric = list => {
    let ht = new HashTable();
    let result = [];

    for (let i = 0; i < list.length; i++) {
        let first = list[i][0];
        let second = list[i][1];
        let value = ht.search(second);
        if (value !== null && value === first) {
            result.push([second, first]);
            result.push([first, second]);
        } else {
            ht.insert(first, second);
        }
    }

    return result;
}

// TC: O(n)