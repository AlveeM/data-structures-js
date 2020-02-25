const Trie = require('./Trie');

const findPos = (root, word) => {
    let pos = -1;
    let level = 0;
    let currentNode = root;

    for (level = 0; level < word.length; level++) {
        let index = word[level].charCodeAt(0) - "a".charCodeAt(0);

        if (currentNode.isEndWord === true) {
            pos = level;
        }

        if (currentNode.children[index] === null) {
            return level;
        }

        currentNode = currentNode.children[index];
    }

    if (currentNode !== null && currentNode.isEndWord) {
        return level;
    }

    return -1;
}

const isFormationPossible = (dict, word) => {
    let trie = new Trie();
    for (let i = 0; i < dict.length; i++) {
        trie.insert(dict[i]);
    }

    let posPrefix = findPos(trie.root, word);
    if (posPrefix === -1) {
        return false;
    }

    let remainingWord = word.slice(posPrefix, word.length);
    let restWordPos = findPos(trie.root, remainingWord);

    if ((posPrefix + restWordPos) === word.length) {
        return true;
    }
    return false;
}

// TC: O(m + n)  m -> dict size, n -> nodes traversed