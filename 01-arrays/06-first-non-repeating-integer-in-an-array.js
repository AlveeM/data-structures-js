const findFirstUnique = arr => {
    const chars = {};
    for (let el of arr) {
        if (chars.hasOwnProperty(el)) {
            chars[el]++
        } else {
            chars[el] = 1
        }
    }

    for (let el of arr) {
        if (chars[el] === 1) {
            return el;
        }
    }

    return null;
}

// TC: O(n)
console.log(findFirstUnique([9,2,3,2,6,6]))