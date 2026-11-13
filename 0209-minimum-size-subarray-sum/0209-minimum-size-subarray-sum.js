/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let right = 0;
    let left = 0;
    let sum = 0;
    let minDistance = +Infinity;

    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            minDistance = Math.min(minDistance, right - left + 1)
            sum -= nums[left];
            left++;
        }
        right++;
    }

    return minDistance == +Infinity?0:minDistance;

};