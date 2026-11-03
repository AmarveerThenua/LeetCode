/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {


    let max = nums[0];

    let count = 0;

    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        count += max - nums[i]
    }

    return count;


};