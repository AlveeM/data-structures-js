const HashTable = require('./HashTable');

const findSubZero = arr => {
    debugger;
    let hMap = new HashTable();
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
        if (list[i] === 0 || sum === 0 || hMap.search(sum) !== null) {
            return true;
        }
        hMap.insert(sum, i);
    }
    return false;
}

// TC: O(n)