/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function binSearch(nums, target, start, end) {
    if (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2)
        if (nums[mid] == target) {
            return mid
        }
        else if (nums[mid] > target) {
            return binSearch(nums, target, start, mid - 1);
        }
        else {
            return binSearch(nums, target, mid + 1, end)
        }
    }
    return -1;
}

var search = function (nums, target) {
    return binSearch(nums, target, 0, nums.length - 1);
};