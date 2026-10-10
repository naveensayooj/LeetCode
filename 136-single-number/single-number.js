/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   for(i=0;i<=nums.length;i++)
   {
    let match=nums.filter(num=>num===nums[i])
    if( match.length===1){
        return nums[i];
    }
   }
};
console.log(singleNumber([1,2,2]));
