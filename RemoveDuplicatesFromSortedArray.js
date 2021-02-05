/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // iterate through list of array elements
    for (let i = 0; i < nums.length; i++) {
        //check if element is duplicated
        if (nums[i] === nums[i + 1]) {
            //remove element
            nums.splice(i, 1);
            i--;
        }
    }
};