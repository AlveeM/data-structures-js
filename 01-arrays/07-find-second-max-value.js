const findSecondMax = arr => {
    arr.sort((a, b) => a - b);

    if (arr.length >= 2) {
        return arr[arr.length - 2];
    } else {
        return null;
    }
}

// TC: Complexity of sorting algorithm
console.log(findSecondMax([9,2,3,6]));