/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let greater = -Infinity;
    count = 0
    for (let i = 0; i < nums.length; i++) {
        greater = Math.max(greater, nums[i])
    }


    for (let i = 0; i < nums.length; i++) {
        if (greater >= nums[i] * 2) {
            count += 1;
        }
    }
    if (count == nums.length - 1) {
        return nums.indexOf(greater)
    } else {
        return -1
    }
};