// using sorting and two pointers
const findSum = (arr, targetSum) => {
    let left = 0;
    let right = arr.length - 1;
    let currentSum = 0;

    arr.sort((a, b) => a - b);

    while (left < right) {
        currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [arr[left], arr[right]];
        }
        if (targetSum > currentSum) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return false;
}
// TC: O(n * log n)
let arr = [4, 2, 1, 5, 7, 10, 15];
console.log(findSum(arr, 17));
console.log(findSum(arr, 10));

// using a set
const findSum2 = (arr, targetSum) => {
    let numSet = new Set();
    let results = [];

    for (let i in arr) {
        if (numSet.has(targetSum - arr[i])) {
            results.push(targetSum - arr[i]);
            results.push(arr[i]);
            return results;
        }
        numSet.add(arr[i]);
    }

    return false;
}
// TC: O(n)
// arr = [1, 2, 4];
let arr2 = [4, 2, 1, 5, 7, 10, 15];
console.log(findSum2(arr, 17));
console.log(findSum2(arr2, 10));