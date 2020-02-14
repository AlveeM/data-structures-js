const rearrange = arr => {
    let leftMostPosIdx = 0;
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i !== leftMostPosIdx) {
                temp = arr[i];
                arr[i] = arr[leftMostPosIdx];
                arr[leftMostPosIdx] = temp;
            }
            leftMostPosIdx++;
        }
    }

    return arr;
}

// TC: O(n)
console.log(rearrange([10, -1, 20, 4, 5, -9, -6]));