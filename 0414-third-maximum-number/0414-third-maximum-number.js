/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => a - b)
    let n = nums.length;
    let k = 1;
    let duplicate = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i]
            k++;
        }
        else {
            duplicate++
        }
    }

    if (nums.length-duplicate < 3) {
        return nums[n - 1-duplicate]
    }
    else {
        return nums[n - 3 - duplicate]
    }
};