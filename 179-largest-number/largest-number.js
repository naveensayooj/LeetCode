/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
    nums.sort((a, b) => {
        let first = "" + a + b;
        let second = "" + b + a;

        return second.localeCompare(first);
    });

    if (nums[0] === 0) {
        return "0";
    }

    return nums.join("");
};
