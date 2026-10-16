/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charset = new Set();
    let left=0;
    let maxlength=0;

    for(let right=0;right<s.length;right++)
    {
        while(charset.has(s[right])){
            charset.delete(s[left]);
            left++;
        }
        charset.add(s[right]);
        maxlength= Math.max(maxlength,right-left+1);
    }
    return maxlength;
};