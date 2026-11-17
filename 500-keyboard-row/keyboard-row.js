/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    let result = [];

    for (let word of words) {
        let w = word.toLowerCase();

        if (
            [...w].every(char => row1.includes(char)) ||
            [...w].every(char => row2.includes(char)) ||
            [...w].every(char => row3.includes(char))
        ) {
            result.push(word);
        }
    }

    return result;
};
