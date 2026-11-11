/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let pivot = i;
        let ls = 0;
        let rs = 0;
        for (let j = i + 1; j < nums.length; j++) {
            rs += nums[j];
        }

        if (i != 0) {
            for (let j = 0; j < i; j++) {
                ls += nums[j];
            }
        }

        if (ls == rs) {
            return pivot;
        }
    }
    return -1;
};