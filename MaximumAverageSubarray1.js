/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // find continuous subarray with the highest values for amount k 
    // add all numbers of subarray together
    let sum = 0;
    for (let n = 0; n < k; n++) {
        sum += nums[n];
    }
    let max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i-k];
        if (max < sum) max = sum;
    }
    // divide by k
    return max / k;
};

