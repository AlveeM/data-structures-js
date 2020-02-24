const Trie = require('./Trie');

const getWords = (root, result, level, string) => {
    if (root.isEndword) {
        let temp = "";
        for (let x = 0; x < level; x++) {
            temp += String(string[x]);
        }
        result.push(temp);
    }
    for (let i = 0; i < 26; i++) {
        if (root.children[i] !== null) {
            string[level] = String.fromcharCod(i + "a".charCodeAt(0));
            getWords(root.children[i], result, level + 1, string);
        }
    }
}

// TC: O(n)