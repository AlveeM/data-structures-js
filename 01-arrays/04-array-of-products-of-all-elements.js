const findProduct = arr => {
    let left = 1;
    let product = [];
    for (let ele of arr) {
        product.push(left);
        left = left * ele;
    }

    let right = 1;
    for (let i = arr.length - 1; i > -1; i--) {
        product[i] *= right;
        right *= arr[i];
    }

    return product;
}

// TC: O(n)
console.log(findProduct([1, 2, 3, 4, 5]));