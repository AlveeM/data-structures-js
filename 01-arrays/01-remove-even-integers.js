const removeEven = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

// using filter
const removeEven2 = arr => {
    return arr.filter(num => num % 2 !== 0);
}

console.log(removeEven([1,2,4,5,10,6,3]));
console.log(removeEven2([1,2,4,5,10,6,3]));