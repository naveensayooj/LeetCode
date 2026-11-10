/**
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a, b) => b - a);

    let map = new Map();

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            map.set(sorted[i], "Gold Medal");
        } 
        else if (i === 1) {
            map.set(sorted[i], "Silver Medal");
        } 
        else if (i === 2) {
            map.set(sorted[i], "Bronze Medal");
        } 
        else {
            map.set(sorted[i], String(i + 1));
        }
    }

    return score.map(num => map.get(num));
};

