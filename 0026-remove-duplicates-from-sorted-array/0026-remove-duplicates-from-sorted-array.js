/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 1;
    let k = 1;

    while (j < nums.length) {
        if (nums[j] != nums[j - 1]) {
            nums[k++] = nums[j];
        }
        j++;
    }

    return k;
};