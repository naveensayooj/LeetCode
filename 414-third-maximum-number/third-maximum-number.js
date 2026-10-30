/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let clean = [...new Set(nums)];
    clean.sort((a, b) => b - a);
    if (clean.length >= 3) {
        return clean[2]; 
    } else {
        return clean[0]; 
    }
};
