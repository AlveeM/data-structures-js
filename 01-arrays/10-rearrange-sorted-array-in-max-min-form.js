const maxMin = arr => {
    let result = [];
    let arrMidLen = Math.floor(arr.length / 2);

    for (let i = 0; i < arrMidLen; i++) {
        max = arr[arr.length - (i + 1)];
        min = arr[i];
        result.push(max);
        result.push(min);
    }

    if (arr.length % 2) {
        result.push(arr[arrMidLen]);
    }

    return result;
}

console.log(maxMin([1,2,3,4,5,6,7]));