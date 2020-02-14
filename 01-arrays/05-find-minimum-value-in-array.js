const findMinimum = arr => {
    let min = Infinity;
    for (let el of arr) {
        if (el < min) {
            min = el;
        }
    }
    return min;
}

// TC: O(n)
let arr = [9, 2, 3, 6];
console.log(findMinimum(arr));