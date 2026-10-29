/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1= new Set(nums1);
    let common = nums2.filter(item=>set1.has(item));
   let result= [...new Set(common)]
   return result;
};