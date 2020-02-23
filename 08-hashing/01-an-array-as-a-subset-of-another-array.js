const HashTable = require('./HashTable');

const isSubset = (list1, list2) => {
    let ht = new HashTable();
    for (let i = 0; i < list1.length; i++) {
        ht.insert(list1[i], i);
    }
    for (let j = 0; j < list2.length; j++) {
        if (ht.search(list2[j]) === null) {
            return false;
        }
    }
    return true;
}

var list1=[1, 2, 3, 4, 5, 6];
var list2=[2, 4, 6];
var list3=[7, 8, 3];
console.log(isSubset(list1, list2));
console.log(isSubset(list1, list3));
