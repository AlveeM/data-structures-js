const HashTable = require('./HashTable');

const isDisjoint = (list1, list2) => {
    let ht = new HashTable();

    for (let i = 0; i < list1.length; i++) {
        ht.insert(list1[i], i);
    }

    for (let j = 0; j < list2.length; j++) {
        if(ht.search(list2[j]) !== null) {
            return false;
        }
    }

    return true;
}

// TC: O(m + n)