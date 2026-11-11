/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let rightSum = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        rightSum += nums[i]
    }

    let leftSum = 0;
    for (let i = 0; i < n; i++) {
        if(leftSum == rightSum-nums[i]){
            return i;
        }

        rightSum -= nums[i];
        leftSum += nums[i]
    }

    return -1;
};