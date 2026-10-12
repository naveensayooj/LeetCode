/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words= s.trim().split(" ");
    clean= words.filter(wrd=>wrd!=="");
    result= clean.reverse().join(" ");
    return result;
};

reverseWords("");