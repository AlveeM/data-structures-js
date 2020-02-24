const Trie = require('./Trie');

const getWords = (root, result, level, word) => {
    if (root.isEndWord) {
        let  temp = "";
        for (let i = 0; i < level; i++) {
            temp += word[i];
        }
        result.push(temp);
    }

    for (let i = 0; i < 26; i++) {
        if (root.children[i] !== null) {
            word[level] = String.fromCharCode(i + "a".charCodeAt(0));
            getWords(root.children[i], result, level + 1, word);
        }
    }
}

const sortArray = arr => {
    let result = [];
    let trie = new Trie();
    for (let i = 0; i < arr.length; i++) {
        trie.insert(String(arr[i]), i);
    }

    let word = [];
    for (let i = 0; i < 26; i++) {
        word.push('');
    }
    getWords(trie.root, result, 0, word);
    return result;
}

// TC: O(n)