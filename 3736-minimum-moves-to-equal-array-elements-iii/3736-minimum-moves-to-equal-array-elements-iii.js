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
        if (nums[i] < max) {
            for (let j = nums[i]; j < max; j++) {
                nums[i] = nums[i] + 1;
                count++;
            }
        }
    }

    return count;


};