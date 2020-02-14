const rightRotate = (arr, n) => {
    return (arr.splice(arr.length - n)).concat(arr);
}

// TC: O(1)
console.log(rightRotate([1,2,3,4,5], 3));