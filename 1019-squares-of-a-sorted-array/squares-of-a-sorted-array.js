/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[pos] = nums[left] * nums[left];
            left++;
        } else {
            result[pos] = nums[right] * nums[right];
            right--;
        }
        pos--;
    }

    return result;
};